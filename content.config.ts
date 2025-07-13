import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Get locale from environment variable
const locale = process.env.NUXT_PUBLIC_LOCALE || 'en'
const isDev = process.env.NODE_ENV === 'development'

const schema = z.object({
  title: z.string(),
  desc: z.string().optional(),
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  banner: z.string().optional(),
  avatar: z.object({
    src: z.string(),
    alt: z.string()
  }).optional(),
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    to: z.string(),
    target: z.string().optional()
  })).optional()
})

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: {
        include: isDev ? '**' : `${locale}/**/*`
      },
      type: 'page',
      schema
    })
  }
})
