import { addComponentsDir, addImportsDir, addServerHandler, createResolver, defineNuxtModule, extendPages } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'search',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'search',
        path: '/s',
        file: resolve('./runtime/app/pages/s/index.vue'),
      })
    })

    addServerHandler({
      route: '/api/route',
      handler: resolve('./runtime/server/api/route'),
    })

    addImportsDir(resolve('./runtime/app/composables'))

    addComponentsDir({
      path: resolve('./runtime/app/components'),
    })
  },
})