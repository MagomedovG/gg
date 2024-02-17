// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "node:fs"

const locales = fs.readdirSync("locales")
    .map((file) => ({
      code: file.replace(/\.(yml|yaml|json)$/, ""),
      file,
    }))
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts'
  ],
    googleFonts: {
        prefetch: true,
        families: {
            Sen: {
                wght: [100, 400, 500, 600, 800],
            },
        },
    },
  i18n: {
    langDir: "locales",
    defaultLocale: "en",
    locales,
    strategy: 'prefix_except_default'
  },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})
