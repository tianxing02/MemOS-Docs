<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

interface MenuItem {
  to: string
  label: string
  target?: string
}

const config = useRuntimeConfig()

const { t, locale } = useI18n()
const { header } = useAppConfig()

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const localizedMenus = computed<MenuItem[]>(() => {
  return (header.memus as MenuItem[]).map(menu => ({
    ...menu,
    label: t(`${menu.label}`)
  }))
})

function handleLocaleSwitch() {
  if (locale.value === 'en') {
    window.location.href = `${config.public.cnDomain}/${window.location.pathname}`
  } else {
    window.location.href = `${config.public.enDomain}/${window.location.pathname}`
  }
}
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

    <UNavigationMenu :items="localizedMenus" class="justify-center">
      <template #item="{ item }">
        <div>{{ item.label }}</div>
      </template>
    </UNavigationMenu>

    <template #right>
      <UContentSearchButton
        v-if="header?.search"
        class="cursor-pointer"
      />

      <UButton
        color="neutral"
        variant="ghost"
        class="cursor-pointer"
        @click="handleLocaleSwitch"
      >
        <LocaleSwitch class="w-[20px] h-[20px]" />
      </UButton>

      <UModal>
        <UButton color="neutral" variant="ghost" icon="ri:wechat-fill" class="cursor-pointer"/>
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
