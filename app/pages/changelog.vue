<script setup lang="ts">
interface Change {
  type: string
  items: string[]
}

interface Version {
  title: string
  date: string
  description?: string
  changes: Change[]
  to?: string
  target?: string
  ui?: {
    container: string
  }
}

// Mock data based on changelog.md content
const versions = ref<Version[]>([
  {
    title: '1.1.1',
    date: '2023-03-05',
    changes: [
      {
        type: 'Added',
        items: [
          'Arabic translation (#444)',
          'v1.1 French translation',
          'v1.1 Dutch translation (#371)',
          'v1.1 Russian translation (#410)',
          'v1.1 Japanese translation (#363)',
          'v1.1 Norwegian Bokmål translation (#383)',
          'v1.1 "Inconsistent Changes" Turkish translation (#347)',
          'Default to most recent versions available for each languages',
          'Display count of available translations (26 to date!)',
          'Centralize all links into `/data/links.json` so they can be updated easily'
        ]
      },
      {
        type: 'Fixed',
        items: [
          'Improve French translation (#377)',
          'Improve id-ID translation (#416)',
          'Improve Persian translation (#457)',
          'Improve Russian translation (#408)',
          'Improve Swedish title (#419)',
          'Improve zh-CN translation (#359)',
          'Improve French translation (#357)',
          'Improve zh-TW translation (#360, #355)',
          'Improve Spanish (es-ES) transltion (#362)',
          'Foldout menu in Dutch translation (#371)',
          'Missing periods at the end of each change (#451)',
          'Fix missing logo in 1.1 pages',
          'Display notice when translation isn\'t for most recent version',
          'Various broken links, page versions, and indentations'
        ]
      },
      {
        type: 'Changed',
        items: [
          'Upgrade dependencies: Ruby 3.2.1, Middleman, etc.'
        ]
      },
      {
        type: 'Removed',
        items: [
          'Unused normalize.css file',
          'Identical links assigned in each translation file',
          'Duplicate index file for the english version'
        ]
      }
    ],
    ui: {
      container: 'max-w-3xl'
    }
  },
  {
    title: '1.1.0',
    date: '2019-02-15',
    changes: [
      {
        type: 'Added',
        items: [
          'Danish translation (#297)',
          'Georgian translation from (#337)',
          'Changelog inconsistency section in Bad Practices'
        ]
      },
      {
        type: 'Fixed',
        items: [
          'Italian translation (#332)',
          'Indonesian translation (#336)'
        ]
      }
    ],
    ui: {
      container: 'max-w-3xl'
    }
  },
  {
    title: '1.0.0',
    date: '2017-06-20',
    changes: [
      {
        type: 'Added',
        items: [
          'New visual identity by @tylerfortune8',
          'Version navigation',
          'Links to latest released version in previous versions',
          '"Why keep a changelog?" section',
          '"Who needs a changelog?" section',
          '"How do I make a changelog?" section',
          '"Frequently Asked Questions" section',
          'New "Guiding Principles" sub-section to "How do I make a changelog?"'
        ]
      }
    ],
    ui: {
      container: 'max-w-3xl'
    }
  }
])

useHead({
  title: 'Changelog - MemOS',
  meta: [
    { name: 'description', content: 'Track all notable changes to MemOS' }
  ]
})
</script>

<template>
  <UPage>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">
      </h1>
      <p class="text-lg mb-12">
        All notable changes to MemOS will be documented here.
      </p>
      <UChangelogVersions :versions="versions">
        <template #date="{ version }">
          <div class="flex gap-3 flex-col">
            <span>{{ version.date }}</span>
            <UBadge
              color="neutral"
              variant="outline"
              class="text-primary rounded-full w-fit bg-primary/10"
              >
              v{{ version.title }}
          </UBadge>
          </div>
        </template>
        <template #title="{ version }">
          <div class="hidden">
            {{ version.title }}
          </div>
        </template>
        <template #description="{ version }">
          <!-- Skip title and only show changes -->
          <div v-for="change in version.changes" :key="change.type" class="mb-4">
            <h4 class="font-bold text-lg capitalize mb-2 text-white">
              {{ change.type }}
            </h4>
            <ul class="list-disc list-inside">
              <li v-for="item in change.items" :key="item" class="mb-1">
                {{ item }}
              </li>
            </ul>
          </div>
        </template>
      </UChangelogVersions>
    </div>
    <AppFooter />
  </UPage>
</template> 