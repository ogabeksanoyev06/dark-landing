// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2025-07-15',
				devtools: { enabled: true },
				ssr: true,
				app: {
								head: {
												link: [
																{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
																{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
																{ rel: 'apple-touch-icon', href: '/favicon.svg' }
												]
								}
				},
				css: ['@/assets/css/main.css'],
				modules: [
				 '@nuxt/eslint',
				 '@nuxtjs/tailwindcss',
				 '@nuxtjs/i18n',
				 '@nuxt/image',
				 [
									'@pinia/nuxt',
									{
													autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
									}
					],
				 '@vueuse/nuxt'
				],

				i18n: {
								locales: [
												{ code: 'ru', iso: 'ru-RU', file: 'ru.json' },
												{ code: 'uz', iso: 'uz', file: 'uz.json' },
												{ code: 'en', iso: 'en', file: 'en.json' },
												{ code: 'zh', iso: 'zh-CN', file: 'zh.json' }
								],
								// strategy: 'prefix_except_default',
								defaultLocale: 'uz',
								detectBrowserLanguage: {
												useCookie: true,
												cookieKey: 'locale'
								},
								compilation: {
												strictMessage: false
								}
				},
				image: {
								quality: 80,
								format: ['webp', 'avif', 'png', 'jpg'],
								screens: {
												xs: 320,
												sm: 640,
												md: 768,
												lg: 1024,
												xl: 1280,
												xxl: 1536
								},
								densities: [1, 2],
								presets: {
												avatar: {
																modifiers: {
																				format: 'webp',
																				width: 50,
																				height: 50,
																				quality: 80
																}
												},
												hero: {
																modifiers: {
																				format: 'webp',
																				width: 1200,
																				height: 630,
																				quality: 85
																}
												}
								}
				}
})