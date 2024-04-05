// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  modules: ["@nuxt/image"],
  image: {
    provider: "ipx",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in", type: "transition" },
  },
});
