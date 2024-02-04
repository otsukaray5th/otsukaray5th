// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: { host: '0.0.0.0' },
	modules: ['@nuxt/ui', '@nuxtjs/eslint-module'],
	eslint: { lintOnStart: true, emitWarning: false },
})
