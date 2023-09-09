'use client';
import type { FC, FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  SubmitType,
  handleSaveConnection,
  handleTestConnection,
} from './handle-submit';
import type { Connection } from '@/types';

export const RegisterDatabase: FC = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
      console.log('testando conexão');
      return handleTestConnection(connection);
    }

    if (submitEvent === 'save') {
      return handleSaveConnection(connection);
    }

    // console.log('asd', );
  };
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
          <div className="grid gap-[10px]">
            <label htmlFor="host">Host</label>
            <input
              id="host"
              name="host"
              required
              defaultValue="localhost"
              autoCorrect="off"
              autoComplete="off"
            />
          </div>
          <div className="grid gap-[10px] w-[140px]">
            <label htmlFor="port">Port</label>
            <input id="port" name="port" type="number" defaultValue="5432" />
          </div>
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
