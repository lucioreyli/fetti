/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@tauri-apps/api'],
  entry: {
    'sparksql.worker':
      'monaco-sql-languages/out/esm/sparksql/sparksql.worker.js',
    'flinksql.worker':
      'monaco-sql-languages/out/esm/flinksql/flinksql.worker.js',
    'hivesql.worker': 'monaco-sql-languages/out/esm/hivesql/hivesql.worker.js',
    'mysql.worker': 'monaco-sql-languages/out/esm/mysql/mysql.worker.js',
    'pgsql.worker': 'monaco-sql-languages/out/esm/pgsql/pgsql.worker.js',
    'plsql.worker': 'monaco-sql-languages/out/esm/plsql/plsql.worker.js',
    'sql.worker': 'monaco-sql-languages/out/esm/sql/sql.worker.js',
  },
};

module.exports = nextConfig;
