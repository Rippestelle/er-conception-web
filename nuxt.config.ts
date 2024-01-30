// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/scss/app.scss"],
  build: {
    transpile: ["gsap"],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.svg" }],
    },
  },
});
