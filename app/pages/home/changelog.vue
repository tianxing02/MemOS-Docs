<script setup lang="ts">
import releasesData from '../../../content/releases.json'

const { t } = useI18n()

interface ChangeInfo {
  type: string
  description: string
  author: string
  pr: number | null
}

interface Version {
  title: string
  date: string
  description?: string
  changedInfo: ChangeInfo[]
}

const activeTab = ref('0')

const tabs = [
  {
    name: 'opensource',
    label: 'Open Source'
  },
  {
    name: 'playground',
    label: 'Playground'
  }
]

const opensourceVersions = ref<Version[]>(releasesData.versions)

const playgroundVersions = ref<Version[]>([
  {
    title: 'v1.0.0',
    date: '2024-03-20',
    description: 'Initial release of MemOS Playground',
    changedInfo: [
      {
        type: 'feat',
        description: 'Launch MemOS Playground with basic features',
        author: 'MemOS Team',
        pr: null
      }
    ]
  }
])

function handleTabChange(val: string) {
  activeTab.value = val
}

</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="t('changelog.title') " class="border-b-[0px]">
        <template #description>
          <p class="text-lg text-gray-600 dark:text-gray-300">{{ t('changelog.description') }}</p>
        </template>
      </UPageHeader>

      <UTabs
        v-model="activeTab"
        :items="tabs"
        :default-value="'opensource'"
        variant="link"
        class="gap-4 w-full"
        :ui="{ trigger: 'grow' }"
        @update:model-value="handleTabChange"
      >
        <template #default="{ item }">{{ item.label }}</template>
      </UTabs>

      <div class="mt-8">
        <UChangelogVersions v-if="activeTab === '0'" :versions="opensourceVersions">
          <template #title="{ version }">
            <ULink :to="version.releaseUrl" target="_blank" class="text-white hover:text-primary-600">
              <h3 class="text-2xl font-semibold mb-[10px]">{{ version.title }}</h3>
            </ULink>
          </template>
          <template #body="{ version }" class="w-max">
            <ol class="list-decimal list-inside space-y-2 w-max">
              <li v-for="(change, idx) in version.changedInfo" :key="idx" class="flex">
                <span class="text-highlight text-white font-bold ml-2">{{ change.type }}: </span>
                <span class="ml-2">{{ change.description }} by @{{ change.author }}
                  <ULink 
                    v-if="change.pr"
                    :to="`https://github.com/MemTensor/MemOS/pull/${change.pr}`"
                    target="_blank"
                    class="text-primary-500 hover:text-primary-600 dark:text-primary-400"
                  >(#{{ change.pr }})</ULink>
                </span>
              </li>
            </ol>
          </template>
        </UChangelogVersions>

        <UChangelogVersions v-else :versions="playgroundVersions">
          <template #body="{ version }">
            <ol class="list-decimal list-inside space-y-2">
              <li v-for="(change, idx) in version.changedInfo" :key="idx" class="flex">
                <span class="text-highlight text-white font-bold ml-2">{{ change.type }}: </span>
                <span class="ml-2">{{ change.description }} by @{{ change.author }}
                  <ULink 
                    v-if="change.pr"
                    :to="`https://github.com/MemTensor/MemOS/pull/${change.pr}`"
                    target="_blank"
                    class="text-primary-500 hover:text-primary-600 dark:text-primary-400"
                  >(#{{ change.pr }})</ULink>
                </span>
              </li>
            </ol>
          </template>
        </UChangelogVersions>
      </div>
    </UPage>
  </UContainer>
</template>

<style scoped>
.changelog-list {
  counter-reset: changelog;
}
</style>