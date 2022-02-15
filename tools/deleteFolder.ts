import fs from 'fs'

import { deleteArr } from './config'

const deleteFolder = path => {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function (file, index) {
      var curPath = path + '/' + file

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolder(curPath)
      } else {
        // delete file
        fs.unlinkSync(curPath)
      }
    })

    console.info(`deleted ${path} ...`)
    fs.rmdirSync(path)
  }
}

console.log('Cleaning working tree...')

deleteArr.forEach(item => deleteFolder(item))

console.log('Successfully cleaned working tree!')
