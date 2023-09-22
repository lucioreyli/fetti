import type { Connection } from '@/types';
import { mountConnectionStr } from '@/utils/mount-connection-str';
import { invoke } from '@tauri-apps/api/tauri';

export type SubmitType = 'test' | 'save' | 'enter';

export const handleTestConnection = async (
  connection: Connection,
): Promise<boolean> =>
  invoke<boolean>('test_connection', {
    connStr: mountConnectionStr(connection),
    isSsl: connection.sslRequired,
  }).catch((e) => e);
