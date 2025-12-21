import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	darkMode: 'class',
	content: [
		'./app.vue',
		'./error.vue',
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./composables/**/*.{js,ts}',
		'./plugins/**/*.{js,ts}',
		'./utils/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				'adero-trial': ['Adero Trial', 'sans-serif']
			},
			colors: {
				dark: {
					DEFAULT: '#020D17',
					1: '#131313',
					2: '#141414',
					3: '#0F0F0F',
					4: '#1C1C1C',
					5: '#1B1B1B'
				},

				orange: {
					DEFAULT: '#FF541A'
				}
			},
			lineHeight: {
				120: '120%',
				130: '130%',
				140: '140%'
			},
			boxShadow: {
				button:
					'0 284px 80px 0 rgba(255, 78, 19, 0.01), 0 182px 73px 0 rgba(255, 78, 19, 0.12), 0 102px 61px 0 rgba(255, 78, 19, 0.40), 0 45px 45px 0 rgba(255, 78, 19, 0.08), 0 11px 25px 0 rgba(255, 78, 19, 0.49)'
			},
			borderColor: {
				DEFAULT: '#EDF2F7'
			}
		}
	},
	plugins: []
}
