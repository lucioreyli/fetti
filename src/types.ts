export type Connection = {
  name?: string;
  host: string;
  port?: number;
  sslRequired: boolean;
};

declare global {
  interface DocumentEventMap {
    'create-connection': CustomEvent<{ connection: string }>;
  }
}
