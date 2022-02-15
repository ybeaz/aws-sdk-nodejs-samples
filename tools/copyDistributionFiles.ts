import fs from 'fs'
import ncp from 'ncp'

import { getSplitedStrDirFile } from './getSplitedStrDirFile'
import { dir, copyArr } from './config'

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

const copyFileDir = (src, dest) => {
  const { dir } = getSplitedStrDirFile(dest)

  if (dir && !fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  // ncp.limit = 16
  // ncp.clobber = true
  ncp(src, dest, function (err) {
    if (err) {
      return console.error(`[error with coping ${src}]`, err)
    }
    console.info(`copied ${src} ...`)
  })
}

copyArr.length &&
  copyArr.forEach(item => {
    if ('src' in item && 'dest' in item) copyFileDir(item['src'], item['dest'])
  })
