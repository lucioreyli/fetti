import type { Connection } from '@/types';
import { mountConnectionStr } from '@/utils/mount-connection-str';
import { invoke } from '@tauri-apps/api/tauri';

export type SubmitType = 'test' | 'save' | 'enter';

export const handleTestConnection = async (connection: Connection) => {
  console.log(connection);
  const conStr = mountConnectionStr(connection);
  console.log(conStr);
  return await invoke<string>('test_connection', { name: conStr });
};

export const handleSaveConnection = (connection: Connection) => {
  const dbs = (JSON.parse(localStorage.getItem('dbs')!) || []) as Connection[];
  dbs.push(connection);
  localStorage.setItem('dbs', JSON.stringify(dbs));
  const event = new CustomEvent('create-connection', { detail: connection });
  window.dispatchEvent(event);
};

export const handleSubmit = {
  test: handleTestConnection,
  save: handleSaveConnection,
  enter: () => {},
} satisfies Record<SubmitType, Function>;
