import { join } from 'path'
import { createHash } from 'blake2'
import { Readable } from 'stream'
import * as carbone from 'carbone'

export function resolveCollectionName(name: string): string {
  if (!name) return

  let flag = false
  let newName = ''

  for (let i = 0; i < name.length; ++i) {
    if (name[i] === '-') flag = true
    else if (flag) newName += name[i]
    else newName += name[i]
  }

  return newName + 'Model'
}

export function hashData(data: string, len = 64): string {
  return createHash('blake2b', { digestLength: len })
    .update(Buffer.from(data))
    .digest('hex')
}

export function printReport(filename: string, data: Record<string, any>): Promise<Readable> {
  return new Promise<Readable>((resolve , reject) => {
    carbone.render(join(process.cwd(), 'src', 'data', 'reports', filename), data, {convertTo: 'pdf'}, (err, result) => {
      if (err) reject(err)
      else {
        const stream = new Readable()
        stream.push(result)
        stream.push(null)
        resolve(stream);
      }
    })
  })
}