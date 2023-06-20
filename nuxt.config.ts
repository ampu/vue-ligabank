// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

const {GH_PAGES} = process.env

export default defineNuxtConfig({
  ssr: false,
  pages: true,
  devtools: {
    enabled: true,
  },
  components: [
    `~/components`,
    `~/components/ui`,
    `~/components/hero`,
    `~/components/services`,
    `~/components/currency`,
    `~/components/credit`,
    `~/components/offices`,
  ],
  imports: {
    autoImport: true,
  },
  app: {
    cdnURL: GH_PAGES ? `https://ampu.github.io/vue-ligabank/` : undefined,
    baseURL: GH_PAGES ? `/vue-ligabank/` : undefined,
  },
  router: {
    options: {
      hashMode: true,
    },
  },
  modules: [
    `@pinia/nuxt`,
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: `url`,
        svgo: false,
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: /* language=scss */ `
            @import "normalize.css/normalize.css";
            @import "@/assets/styles/fonts";
            @import "@/assets/styles/functions";
            @import "@/assets/styles/variables";
            @import "@/assets/styles/mixins";
            @import "@/assets/styles/animations";
            @import "@/assets/styles/globals";
          `,
        }
      }
    }
  },
})
