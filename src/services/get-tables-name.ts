import type { Connection } from '@/types';
import { mountConnectionStr } from '@/utils/mount-connection-str';
import { invoke } from '@tauri-apps/api/tauri';

export const getTablesName = async (
  connection: Connection,
): Promise<string[]> => {
  const connStr: string = mountConnectionStr(connection);
  const tables = await invoke<string[]>('get_tables', {
    connStr,
    isSsl: connection.sslRequired,
  });
  return Array.isArray(tables) ? tables : [];
};
