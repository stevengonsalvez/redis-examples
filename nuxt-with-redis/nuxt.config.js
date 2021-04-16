export default {
  head: {
    title: "nuxt-with-redis",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  components: true,
  buildModules: ["@nuxtjs/tailwindcss"],
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000"
  },
  serverMiddleware: [{ path: "/api", handler: "~/api/count.js" }]
}