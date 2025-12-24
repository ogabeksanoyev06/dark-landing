<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { useSeoMeta } from '#app'
// const { t, locale } = useI18n()

// const getSeoFallback = (lang) => {
// 	const data = {
// 		uz: {
// 			title: 'DARK — Sifatli va ishonchli shinalar',
// 			description: 'DARK — avtomobillar uchun sifatli shinalar savdosi. Keng tanlov, tezkor xizmat va hamyonbop narxlar.'
// 		},
// 		ru: {
// 			title: 'DARK — Качественные и надёжные шины',
// 			description: 'Качественные шины для автомобилей. Широкий выбор, быстрый сервис и доступные цены.'
// 		},
// 		en: {
// 			title: 'DARK — Quality and Reliable Tires',
// 			description: 'High-quality tires for vehicles. Wide selection, fast service, and affordable prices.'
// 		}
// 	}

// 	return data[lang] || data.uz
// }

// Global SEO configuration with dynamic translations
useSeoMeta({
	title: 'Everest - Home of real achievers',
	description:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogTitle: 'Everest - Home of real achievers',
	ogDescription:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogImage: 'og.png',
	ogUrl: 'https://everest.uz',
	twitterImage: 'og.png',
	twitterTitle: 'Everest - Home of real achievers',
	twitterDescription:
		'Education isn’t just about what you learn — it’s about who you become in the process. Everest will help you shape a future that reflects real effort and real growth.',
	ogType: 'website',
	ogLocale: 'en_US'
})

useHead({
	script: [
		// Organization
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'Organization',
				'@id': 'https://dark.uz/#organization',
				name: 'DARK Tires',
				alternateName: 'DARK',
				url: 'https://dark.uz',
				logo: 'https://dark.uz/images/favicon-logo.svg',
				description: 'DARK — sifatli, tezkor va hamyonbop shinalar savdosi. Keng tanlov, ishonchli xizmat va tezkor buyurtma.',
				contactPoint: {
					'@type': 'ContactPoint',
					contactType: 'customer service',
					telephone: '+998-90-000-00-00',
					availableLanguage: ['Uzbek', 'Russian']
				},
				sameAs: ['https://instagram.com/darktires', 'https://t.me/darktires'],
				address: {
					'@type': 'PostalAddress',
					addressCountry: 'UZ'
				}
			})
		},

		// Website
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'WebSite',
				'@id': 'https://dark.uz/#website',
				name: 'DARK Tires',
				url: 'https://dark.uz',
				inLanguage: 'uz-UZ',
				description: 'Sifatli va keng tanlovdagi shinalarni tez va qulay buyurtma qiling.',
				publisher: {
					'@type': 'Organization',
					'@id': 'https://dark.uz/#organization'
				}
			})
		},

		// Breadcrumb
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Bosh sahifa',
						item: 'https://dark.uz'
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: 'Mahsulotlar',
						item: 'https://dark.uz/#products'
					},
					{
						'@type': 'ListItem',
						position: 3,
						name: 'Nega DARK',
						item: 'https://dark.uz/#why'
					},
					{
						'@type': 'ListItem',
						position: 4,
						name: 'Afzalliklar',
						item: 'https://dark.uz/#benefits'
					}
					// {
					// 	'@type': 'ListItem',
					// 	position: 5,
					// 	name: 'Aloqa',
					// 	item: 'https://dark.uz/#faq'
					// }
				]
			})
		}
	]
})
</script>
