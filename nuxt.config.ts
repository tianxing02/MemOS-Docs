import yaml from '@rollup/plugin-yaml'

const armsScript = process.env.NODE_ENV === 'production'
  ? [{ innerHTML: `var _czc = _czc || [];
        (function () {
          var um = document.createElement("script");
          um.src = "https://v1.cnzz.com/z.js?id=1281423419&async=1";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(um, s);
        })();`,
    type: 'text/javascript' }]
  : []

const config = {
  app: {
    head: {
      script: [
        ...armsScript
      ]
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxtjs/i18n',
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
        },
        locales: {
          en: {
            name: 'English',
            path: '/'
          },
          zh: {
            name: '中文',
            path: '/'
          }
        }
      }
    ]
  ],

  i18n: {
    locales: [
      {
        code: 'zh',
        iso: 'zh-CN',
        name: '中文'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: false,
  },

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

export default defineNuxtConfig(config)
