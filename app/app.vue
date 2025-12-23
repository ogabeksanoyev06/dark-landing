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
const { t, locale } = useI18n()

const getSeoFallback = (lang) => {
	const data = {
		uz: {
			title: 'DARK — Sifatli va ishonchli shinalar',
			description: 'DARK — avtomobillar uchun sifatli shinalar savdosi. Keng tanlov, tezkor xizmat va hamyonbop narxlar.'
		},
		ru: {
			title: 'DARK — Качественные и надёжные шины',
			description: 'Качественные шины для автомобилей. Широкий выбор, быстрый сервис и доступные цены.'
		},
		en: {
			title: 'DARK — Quality and Reliable Tires',
			description: 'High-quality tires for vehicles. Wide selection, fast service, and affordable prices.'
		}
	}

	return data[lang] || data.uz
}

// Global SEO configuration with dynamic translations
useSeoMeta({
	title: computed(() => {
		const v = t('seo.title')
		return v && v !== 'seo.title' ? v : getSeoFallback(locale.value).title
	}),

	description: computed(() => {
		const v = t('seo.description')
		return v && v !== 'seo.description' ? v : getSeoFallback(locale.value).description
	}),

	keywords: computed(() => {
		const v = t('seo.keywords')
		return v && v !== 'seo.keywords' ? v : 'shina sotib olish, avtomobil shinalari, sifatli shinalar'
	}),

	ogTitle: computed(() => {
		const v = t('seo.og_title')
		return v && v !== 'seo.og_title' ? v : getSeoFallback(locale.value).title
	}),

	ogDescription: computed(() => {
		const v = t('seo.og_description')
		return v && v !== 'seo.og_description' ? v : getSeoFallback(locale.value).description
	}),

	ogImage: '/images/footer-bg.webp',
	ogUrl: 'https://dark-landing-pi.vercel.app/',
	ogType: 'website',

	ogLocale: computed(() => {
		const map = { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' }
		return map[locale.value] || 'uz_UZ'
	}),

	twitterTitle: computed(() => {
		const v = t('seo.twitter_title')
		return v && v !== 'seo.twitter_title' ? v : getSeoFallback(locale.value).title
	}),

	twitterDescription: computed(() => {
		const v = t('seo.twitter_description')
		return v && v !== 'seo.twitter_description' ? v : getSeoFallback(locale.value).description
	}),

	twitterImage: '/images/favicon-logo.svg',
	twitterCard: 'summary_large_image'
})

// Structured Data for DARK (SEO)
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
