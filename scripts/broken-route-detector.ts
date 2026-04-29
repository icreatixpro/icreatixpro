import fs from 'fs'
import path from 'path'

const dir = path.join(process.cwd(), 'src/app')

function scan(folder: string) {
  const items = fs.readdirSync(folder, { withFileTypes: true })

  for (const item of items) {
    if (item.name.startsWith('[')) {
      console.log('⚠️ Dynamic route detected:', item.name)
    }

    const full = path.join(folder, item.name)

    if (item.isDirectory()) {
      scan(full)
    }
  }
}

scan(dir)