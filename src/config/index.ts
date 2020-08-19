const env = process.env

export const serverConfig = {
  port: env.PORT || 8080,
  contextPath: env.CONTEXT_PATH || '/sync-play',
  corsOrigin: (env.CORS_ORIGIN || '').split(',')
}

export const mysqlConfig = {
  host: env.MYSQL_HOST || '',
  user: env.MYSQL_USER || '',
  password: env.MYSQL_PASSWORD || '',
  database: env.MYSQL_DATABASE || 'sync-play'
}
