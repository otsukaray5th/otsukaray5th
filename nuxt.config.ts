// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	devServer: { host: '0.0.0.0' },
	modules: ['@nuxt/ui', '@nuxtjs/eslint-module', '@nuxtjs/i18n'],
	eslint: { lintOnStart: true, emitWarning: false, fix: true },
	i18n: {
		langDir: 'locales',
		locales: [
			{ code: 'en-us', iso: 'en-US', file: 'en-US.json' },
			{ code: 'ja-jp', iso: 'ja-JP', file: 'ja-JP.json' },
			{ code: 'zh-tw', iso: 'zh-TW', file: 'zh-TW.json' },
			{ code: 'zh-cn', iso: 'zh-CN', file: 'zh-CN.json' },
			{ code: 'en', iso: 'en-US', file: 'en-US.json' },
			{ code: 'zh', iso: 'zh-CN', file: 'zh-CN.json' },
		],
		defaultLocale: 'ja-jp',
		detectBrowserLanguage: { useCookie: true },
		strategy: 'no_prefix',
	},
})
