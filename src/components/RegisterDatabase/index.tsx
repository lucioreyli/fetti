'use client';
import {
  useEffect,
  type FC,
  type FormEventHandler,
  useState,
  type ChangeEventHandler,
} from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { type SubmitType, handleTestConnection } from './handle-submit';
import type { Connection } from '@/types';
import { useToast } from '../ui/use-toast';
import { useConnectionsStore } from '@/store/connections';
import { Switch } from '../ui/switch';

export const RegisterDatabase: FC = () => {
  const [form, setForm] = useState<Partial<Connection>>({
    host: 'localhost',
    port: 5432,
    username: '',
    password: '',
    name: '',
    dbName: 'postgres',
    sslRequired: false,
  });
  const { toast } = useToast();
  const saveNewConnection = useConnectionsStore(
    (state) => state.saveNewConnection,
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    const submitEvent = submitter?.attributes.getNamedItem('value')?.value as
      | SubmitType
      | undefined;

    if (!submitEvent) {
      return;
    }

    const data: FormData = new FormData(e.currentTarget);
    const connection = Object.fromEntries(
      data.entries(),
    ) as unknown as Connection;
    connection.sslRequired =
      (connection.sslRequired as unknown as string) === 'on';

    if (submitEvent === 'test') {
      const res = await handleTestConnection(connection);
      return toast({
        variant: res ? 'default' : 'destructive',
        title: res ? '✅ Success' : '❌ Login failed',
      });
    }

    if (submitEvent === 'save') {
      return saveNewConnection(
        Object.assign(connection, { id: window.crypto.randomUUID() }),
      );
    }
  };

  useEffect(() => {
    const getSelectedConnection = (data: unknown) => {
      const connection = (data as { detail: Connection }).detail as Connection;
      setForm(connection);
    };

    window.addEventListener('select-connection', getSelectedConnection);
    return () =>
      window.removeEventListener('select-connection', getSelectedConnection);
  }, []);

  const handleOnChange =
    (
      field: keyof Connection,
      keep = false,
    ): ChangeEventHandler<HTMLInputElement> =>
    (e) =>
      setForm((state) => ({ ...state, [field]: keep ? e : e.target.value }));

  return (
    <div className="py-8 w-10/12 md:w-1/2 mx-auto">
      <h3 className="mb-4">Create connection</h3>
      <form onSubmit={handleSubmit} className="space-y-4 p-1 overflow-y-scroll">
        <Separator />
        <div className="grid gap-[10px]">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Connection name"
            onChange={handleOnChange('name')}
            value={form.name}
          />
        </div>
        <div className="flex gap-4">
          <div className="grid gap-[10px] flex-1">
            <label htmlFor="host">Host</label>
            <input
              id="host"
              name="host"
              required
              autoCorrect="off"
              autoComplete="off"
              onChange={handleOnChange('host')}
              value={form.host}
            />
          </div>
          <div className="grid gap-[10px] w-[140px]">
            <label htmlFor="port">Port</label>
            <input
              id="port"
              name="port"
              type="number"
              placeholder="Port"
              onChange={handleOnChange('port')}
              value={form.port}
            />
          </div>
        </div>
        <div className="grid gap-[10px] flex-1">
          <label htmlFor="dbName">Default database</label>
          <input
            id="dbName"
            name="dbName"
            placeholder="Default database"
            required
            autoCorrect="off"
            autoComplete="off"
            onChange={handleOnChange('dbName')}
            value={form.dbName}
          />
        </div>
        <div className="flex justify-between items-center rounded-lg border p-4">
          <div className="grid gap-[10px]">
            <label htmlFor="sslRequired">SSL</label>
            <span className="text-sm text-muted-foreground">
              Use SSL connection
            </span>
          </div>
          <Switch
            id="sslRequired"
            name="sslRequired"
            checked={form.sslRequired}
            onCheckedChange={
              handleOnChange('sslRequired', true) as unknown as (
                value: boolean,
              ) => void
            }
          />
        </div>
        <Separator />
        <div className="flex gap-4">
          <div className="grid gap-[10px]">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              placeholder="Username"
              autoCorrect="off"
              autoComplete="off"
              onChange={handleOnChange('username')}
              value={form.username}
            />
          </div>
          <div className="grid gap-[10px]">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              autoCorrect="off"
              autoComplete="off"
              onChange={handleOnChange('password')}
              value={form.password}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button variant="outline" type="submit" name="action" value="test">
            Test Connection
          </Button>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              type="submit"
              name="action"
              value="save"
            >
              Save
            </Button>
            <Button type="submit" name="action" value="enter">
              Enter
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
