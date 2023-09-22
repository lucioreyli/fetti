import type { Connection } from '@/types';
import { mountConnectionStr } from '@/utils/mount-connection-str';
import { invoke } from '@tauri-apps/api/tauri';

export const getTablesName = async (
  _connection: Connection,
): Promise<string[]> => {
  const connection: string = mountConnectionStr(_connection);
  const tables = await invoke<string[]>('get_tables', { connection });
  return tables ?? [];
};
