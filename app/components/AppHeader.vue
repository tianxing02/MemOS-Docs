<script setup lang="ts">
const route = useRoute()
const { t, locale, setLocale } = useI18n()
const { header } = useAppConfig()
const config = useRuntimeConfig()
const localizedMenus = computed(() => {
  return [
    {
      to: 'https://memos.openmem.net',
      label: t('header.home')
    },
    {
      to: '/home/overview',
      label: t('header.docs'),
      active: !route.path.includes('/changelog')
    },
    {
      label: t('header.research'),
      target: '_blank',
      to: 'https://memos.openmem.net/paper_memos_v2'
    },
    {
      label: t('header.changelog'),
      to: '/changelog',
      active: route.path.includes('/changelog')
    }
  ]
})

function handleLocaleSwitch() {
  // For development, switch locale directly
  if (config.public.env === 'dev') {
    setLocale(locale.value === 'en' ? 'zh' : 'en')

    return
  }

  // For production, redirect to the corresponding domain
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
      <UNavigationMenu orientation="vertical" :items="localizedMenus" class="justify-center">
        <template #item="{ item }">
          <div>{{ item.label }}</div>
        </template>
      </UNavigationMenu>

      <USeparator type="dashed" class="mt-4 mb-6" />

      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
