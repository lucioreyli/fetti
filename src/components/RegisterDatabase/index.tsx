'use client';
import { useEffect, type FC, type FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  SubmitType,
  handleSaveConnection,
  handleTestConnection,
} from './handle-submit';
import type { Connection } from '@/types';
import { useToast } from '../ui/use-toast';
import { useConnectionsStore } from '@/store/connections';

export const RegisterDatabase: FC = () => {
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

    if (submitEvent === 'test') {
      const res = await handleTestConnection(connection);
      console.log(res);
      toast({
        variant: res ? 'default' : 'destructive',
        title: res ? '✅ Success' : '❌ Login failed',
      });
    }

    if (submitEvent === 'save') {
      return saveNewConnection(connection);
    }
  };

  useEffect(() => {
    const getSelectedConnection = (data: unknown) => {
      (data as { detail: Connection }).detail as Connection;
    };

    window.addEventListener('select-connection', getSelectedConnection);
    return () =>
      window.removeEventListener('select-connection', getSelectedConnection);
  }, []);

  return (
    <div className="pt-4 flex-[0.5] m-auto">
      <h3 className="mb-4">Create connection</h3>
      <form onSubmit={handleSubmit} className="space-y-4 p-1 overflow-y-scroll">
        <Separator />
        <div className="grid gap-[10px]">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Connection name" />
        </div>
        <div className="flex gap-4">
          <div className="grid gap-[10px] flex-1">
            <label htmlFor="host">Host</label>
            <input
              id="host"
              name="host"
              defaultValue="localhost"
              required
              autoCorrect="off"
              autoComplete="off"
            />
          </div>
          <div className="grid gap-[10px] w-[140px]">
            <label htmlFor="port">Port</label>
            <input
              id="port"
              name="port"
              type="number"
              placeholder="Port"
              defaultValue="5432"
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
          />
        </div>
        <Separator />
        <div className="grid gap-[10px]">
          <label htmlFor="username">Username</label>
          <input id="username" name="username" placeholder="Username" />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            autoCorrect="off"
            autoComplete="off"
          />
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
