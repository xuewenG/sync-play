import Video from '../models/video'
import { queryOne } from '../util/mysql'

export function getByVideoCode(videoCode: string): Promise<Video> {
  const sql = 'SELECT * FROM video WHERE videoCode=?'
  return queryOne<Video>(sql, videoCode)
}
