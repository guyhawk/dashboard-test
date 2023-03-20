// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand&display=swap",},
      ],
    }
  }
})
