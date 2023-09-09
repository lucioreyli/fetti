export type Connection = {
  username: string;
  password?: string;
  name?: string;
  host: string;
  port?: number;
  dbName: string;
  sslRequired: boolean;
};

declare global {
  interface DocumentEventMap {
    'create-connection': CustomEvent<{ connection: string }>;
  }
}
