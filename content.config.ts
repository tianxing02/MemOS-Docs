import { defineCollection, defineContentConfig } from '@nuxt/content'

// Get locale from environment variable
const locale = process.env.NUXT_PUBLIC_LOCALE || 'en'
const isDev = process.env.NODE_ENV === 'development'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: {
        include: isDev ? '**' : `${locale}/**/*`
      },
      type: 'page'
    })
  }
})
