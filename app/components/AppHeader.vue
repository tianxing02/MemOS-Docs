<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
console.log('header:', header)
</script>

<template>
  <UHeader
    :to="header?.to || '/'"
  >
    <template
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="header.memus" class="justify-center">
      <template #item="{ item }">
        <div>{{ item.label }}</div>
      </template>
    </UNavigationMenu>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
      />

      <UButton
        color="neutral"
        variant="ghost"
      >
        <LocaleSwitch class="w-[20px] h-[20px]" />
      </UButton>

      <UModal>
        <UButton color="neutral" variant="ghost" icon="ri:wechat-fill" />
        <template #content>
          <img
            src="https://statics.memtensor.com.cn/memos/contact-ui.png"
            alt="WeChat QR"
            class="object-contain"
          >
        </template>
      </UModal>

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
