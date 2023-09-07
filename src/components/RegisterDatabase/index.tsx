import type { FC } from 'react';
import { Button } from '../ui/button';
import { handleSave, tooManyNights } from './handleSave';
import { Separator } from '../ui/separator';

export const RegisterDatabase: FC = () => {
  return (
    <div className="pt-4 flex-[0.5] m-auto">
      <h3 className="mb-4">Create connection</h3>
      <form action={handleSave} className="space-y-4 p-1 overflow-y-scroll">
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
          <Button variant="outline" type="submit" formAction={tooManyNights}>
            Test Connection
          </Button>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              type="submit"
              formAction={tooManyNights}
            >
              Save
            </Button>
            <Button type="submit">Enter</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
