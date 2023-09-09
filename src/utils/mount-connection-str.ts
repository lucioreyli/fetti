import type { Connection } from '@/types';

export const mountConnectionStr = (connection: Connection): string => {
  return [
    'postgres://',
    [
      [connection.username, connection.password].filter((i) => i).join(':'),
      [connection.host, connection.port].filter((i) => i).join(':'),
    ].join('@'),
    '/postgres',
  ].join('');
};
