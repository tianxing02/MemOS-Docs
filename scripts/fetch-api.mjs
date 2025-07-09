import { writeFileSync } from 'fs'
import fetch from 'node-fetch'

async function fetchApiSpec() {
  try {
    console.log('Fetching API specification from MemOS repository...')
    const response = await fetch('https://raw.githubusercontent.com/MemTensor/MemOS/main/docs/openapi.json')

    if (!response.ok) {
      throw new Error(`Failed to fetch API spec: ${response.statusText}`)
    }

    const data = await response.json()
    const targetPath = new URL('../content/api.json', import.meta.url)

    writeFileSync(targetPath, JSON.stringify(data, null, 2))
    console.log('Successfully updated API specification at content/api.json')
  } catch (error) {
    console.error('Error fetching API specification:', error)
    process.exit(1)
  }
}

fetchApiSpec() 