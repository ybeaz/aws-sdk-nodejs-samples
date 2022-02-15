import { getListFilesDir } from './getListFilesDir'
import { getZippedFile } from './getZippedFile'

const getZippedFiles = async () => {
  const files = await getListFilesDir('./dist/src/lambda')

  const filesJs = files.filter(file => {
    let output = false
    const fileArr = file.split('.')
    const ext = [...fileArr].pop()

    if (ext === 'js' && fileArr.length === 2) output = true

    return output
  })

  const path = './dist/src/lambda/'

  filesJs.forEach((file, index) => {
    getZippedFile(path, file)
    console.info(index, 'getZippedFile', file)
  })
}

getZippedFiles()
