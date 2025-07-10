<script setup lang="ts">
const route = useRoute()

const contentNavigation = useContentNavigation()
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/icon.svg' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark'
  }
})

provide('navigation', contentNavigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader v-if="!route.path.startsWith('/docs/api/')"/>

    <template v-if="route.path !== '/' && !route.path.startsWith('/docs/api')">
      <UMain>
        <UContainer>
          <UPage>
            <!-- Document navigation -->
            <template #left>
              <UPageAside class="overflow-auto scrollbar-hide">
                <!-- Use keep-alive to maintain menu state -->
                <keep-alive>
                  <UContentNavigation
                    :navigation="contentNavigation"
                    highlight
                    :ui="{
                      linkTrailingBadge: 'font-semibold uppercase',
                      linkLeadingIcon: 'hidden'
                    }"
                  >
                    <template #link-title="{ link }">
                      <UTooltip :text="link.title" :delay-duration="100" class="w-full min-w-0">
                        <span class="inline-flex items-center gap-2 w-full min-w-0 max-w-full">
                          <UIcon
                            v-if="link.icon && typeof link.icon === 'string'"
                            :name="link.icon as string"
                            class="w-4 h-4 flex-shrink-0"
                          />
                          <span class="truncate flex-1 min-w-0">{{ link.title }}</span>
                          <UIcon
                            v-if="link.target === '_blank'"
                            name="i-ri-external-link-line"
                            class="w-3 h-3 flex-shrink-0 text-gray-400"
                          />
                        </span>
                      </UTooltip>
                    </template>
                  </UContentNavigation>
                </keep-alive>
              </UPageAside>
            </template>

            <!-- Document content -->
            <NuxtPage />
          </UPage>
        </UContainer>

        <AppFooter />
      </UMain>
    </template>

    <!-- Document home page -->
    <template v-else>
      <ClientOnly>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </ClientOnly>
    </template>

    <AppFooter v-if="!route.path.startsWith('/docs/api')"/>

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="contentNavigation"
      />
    </ClientOnly>
  </UApp>
</template>
