import { writeFileSync } from 'fs'
import fetch from 'node-fetch'

function processApiSpec(data) {
  // 深拷贝对象以避免直接修改原始数据
  const processedData = JSON.parse(JSON.stringify(data))

  // 删除指定的描述行
  if (processedData.components?.schemas?.MOSConfig?.properties) {
    const properties = processedData.components.schemas.MOSConfig.properties

    if (properties.chat_model) {
      delete properties.chat_model.description
    }
    if (properties.mem_reader) {
      delete properties.mem_reader.description
    }
  }

  return processedData
}

async function fetchApiSpec() {
  try {
    console.log('Fetching API specification from MemOS repository...')
    const response = await fetch('https://raw.githubusercontent.com/MemTensor/MemOS/main/docs/openapi.json')

    if (!response.ok) {
      throw new Error(`Failed to fetch API spec: ${response.statusText}`)
    }

    const data = await response.json()
    const processedData = processApiSpec(data)
    const targetPath = new URL('../content/api.json', import.meta.url)

    writeFileSync(targetPath, JSON.stringify(processedData, null, 2))
    console.log('Successfully updated API specification at content/api.json')
  } catch (error) {
    console.error('Error fetching API specification:', error)
    process.exit(1)
  }
}

fetchApiSpec()
