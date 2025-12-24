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
</script>
