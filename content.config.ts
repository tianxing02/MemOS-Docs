import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const schema = z.object({
  title: z.string(),
  desc: z.string().optional(),
  category: z.enum(['layout', 'form', 'element', 'navigation', 'data', 'overlay']).optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
  banner: z.string().optional(),
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
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md']
      },
      schema
    })
  }
})
