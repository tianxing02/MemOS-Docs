<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader
    :ui="{
      center: 'flex justify-center items-center',
      container: 'flex items-center justify-between gap-3 h-full'
    }"
    :to="header?.to || '/'"
  >
    <template
      #left
    >
      <NuxtLink :to="header?.to || '/'">
        <LogoPro class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="header.memu" class="justify-center">
      <template #item="{ item }">
        <div>{{ item.label }}</div>
      </template>
    </UNavigationMenu>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
      />

      <UModal>
        <UTooltip text="Contact Us" class="hidden lg:flex" :delay-duration="0">
          <UButton color="neutral" variant="ghost" icon="ri:wechat-fill" />
        </UTooltip>
        <template #content>
          <img
            src="https://memtensor-statics-resources.oss-cn-shanghai.aliyuncs.com/memos/contact-ui.png"
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
