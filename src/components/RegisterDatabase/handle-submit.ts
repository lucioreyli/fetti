import type { Connection } from '@/types';
import { formatForm } from '@/utils/formatForm';

export type SubmitType = 'test' | 'save' | 'enter';

export const handleTestConnection = async (connection: Connection) => {};

export const handleSaveConnection = (connection: Connection) => {
  const dbs = (JSON.parse(localStorage.getItem('dbs')!) || []) as Connection[];
  dbs.push(connection);
  localStorage.setItem('dbs', JSON.stringify(dbs));
  const event = new CustomEvent('create-connection', { detail: connection });
  window.dispatchEvent(event);
};

export const tooManyNights = (form: FormData) => {
  const data = formatForm<Connection>(form);
  console.log('too many nights', data);
};
