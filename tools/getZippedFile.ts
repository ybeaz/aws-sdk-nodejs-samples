import fs from 'fs'
import archiver from 'archiver'

interface IGetZippedFile {
  (path: string, name: string): void
}

export const getZippedFile: IGetZippedFile = (path, name) => {
  const nameNoExt = name.split('.')[0]
  const output = fs.createWriteStream(`${path}${nameNoExt}.zip`)
  const archive = archiver('zip', {
    gzip: true,
    zlib: { level: 9 }, // Sets the compression level.
  })

  archive.on('error', function (err) {
    throw err
  })

  // pipe archive data to the output file
  archive.pipe(output)

  // append files
  archive.file(`${path}${name}`, { name })
  // archive.file('/path/to/README.md', { name: 'foobar.md' })

  archive.finalize()
}
