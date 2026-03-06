import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule, extendPages } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'product',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'product',
        path: '/p/:id',
        file: resolve('./runtime/app/pages/p/[...id].vue/index.vue'),
      }, {
        name: 'variant',
        path: '/p/:id/v/:variantId',
        file: resolve('./runtime/app/pages/p/[...id].vue/v/[...id].vue'),
      })
    })

    addImportsDir(resolve('./runtime/app/composables'))

    addComponentsDir({
      path: resolve('./runtime/app/components'),
    })
  },
})