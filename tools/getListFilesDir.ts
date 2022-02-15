import { promises as fs } from 'fs'

export const getListFilesDir = async dir => {
  return fs.readdir(dir)
}
