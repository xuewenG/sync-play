import mysql from 'mysql'
import { mysqlConfig } from '../config'

const pool = mysql.createPool(mysqlConfig)

export function queryOne<T>(sql: string, args: unknown): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) reject(err)
      conn.query(sql, args, (err, results) => {
        if (err) reject(err)
        if (results.length > 0) {
          resolve(results[0])
        } else {
          resolve()
        }
      })
    })
  })
}
