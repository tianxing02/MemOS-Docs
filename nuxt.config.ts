import yaml from '@rollup/plugin-yaml'

console.log('NUXT_UI_PRO_LICENSE:', process.env.NUXT_UI_PRO_LICENSE)
const config = {
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    [
      'nuxt-openapi-docs-module',
      {
        folder: './content',
        name: 'Api Docs',
        list: true,
        prefix: '/api',
        files: function () {
          return {
            'api.json': 'API Proxy'
          }
        }
      }
    ]
  ],

  devtools: {
    enabled: true
  },

  vite: {
    plugins: [
      yaml()
    ]
  },

  ssr: true,

  css: ['~/assets/css/main.css'],

  ui: {
    fonts: false,
    colorMode: false
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'ts', 'typescript', 'diff', 'vue', 'json', 'yml', 'css', 'mdc']
        }
      }
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  uiPro: {
    licenseKey: process.env.NUXT_UI_PRO_LICENSE
  }
}

// @see https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(config)
