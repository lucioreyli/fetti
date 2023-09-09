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
