import { execSync } from 'child_process'
import { existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Get environment parameters from npm config or use defaults
const env = process.env.npm_config_env || 'prod'
const locale = process.env.npm_config_locale || 'en'

console.log(`🚀 Starting build process... Environment: ${env}, Locale: ${locale}`)

// Check environment config
console.log('⚙️ Configuring environment variables...')
const configPath = join(__dirname, '..', 'envConfig', `config.${env}.ts`)
if (existsSync(configPath)) {
  console.log(`✅ Environment config detected: config.${env}.ts`)
} else {
  console.log(`⚠️ Warning: Environment config file config.${env}.ts not found, using default config`)
}

// Build documentation
console.log('🏗️ Starting documentation build...')
try {
  const buildCommand = process.platform === 'win32'
    ? `set NUXT_ENV_CONFIG=${env}&& set NUXT_PUBLIC_LOCALE=${locale}&& nuxt generate`
    : `NUXT_ENV_CONFIG=${env} NUXT_PUBLIC_LOCALE=${locale} nuxt generate`

  execSync(buildCommand, {
    stdio: 'inherit',
    env: { ...process.env }
  })
  console.log('✨ Build process completed!')
} catch (error) {
  console.error('❌ Build failed:', error.message)
  process.exit(1)
}
