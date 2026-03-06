import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule, extendPages } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'listing',
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'listing',
        path: '/l/:slug',
        file: resolve('./runtime/app/pages/l/[...slug].vue'),
      })
    })

    addImportsDir(resolve('./runtime/app/composables'))

    addComponentsDir({
      path: resolve('./runtime/app/components'),
    })
  },
})