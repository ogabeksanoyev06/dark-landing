<template>
	<div class="flex-1">
		<HeroSection />
		<BlogSection />
		<ProductSection />
		<AboutSection />
		<BenefitsSection />
		<WhySection />
		<BranchesSection />
		<FaqSection />
	</div>
</template>

<script setup>
import AboutSection from '~/components/sections/about/AboutSection.vue'
import BenefitsSection from '~/components/sections/benefits/BenefitsSection.vue'
import BlogSection from '~/components/sections/blog/BlogSection.vue'
import FaqSection from '~/components/sections/faq/FaqSection.vue'
import ProductSection from '~/components/sections/products/ProductSection.vue'
import WhySection from '~/components/sections/why/WhySection.vue'
import HeroSection from '~/components/sections/hero/HeroSection.vue'
import BranchesSection from '~/components/sections/branches/BranchesSection.vue'

const { locale } = useI18n()

// Language-specific SEO content for homepage
const getDarkHomepageSeoContent = (lang) => {
	const content = {
		uz: {
			title: 'DARK — sifatli, tezkor va hamyonbop!',
			description: 'DARK bilan eng sifatli va keng tanlovdagi shinalarni tez va qulay xarid qiling. Biz bilan bog‘laning va kerakli shinaga hoziroq buyurtma bering.',
			ogTitle: 'DARK — sifatli, tezkor va hamyonbop!',
			ogDescription: 'Eng sifatli va keng tanlovdagi mahsulotlar faqat DARK’da. Tezkor xizmat va hamyonbop narxlar.',
			twitterTitle: 'DARK — sifatli, tezkor va hamyonbop!',
			twitterDescription: 'Sifatli shinalar, keng tanlov va tezkor xizmat. Kerakli shinaga hoziroq buyurtma bering.'
		},

		ru: {
			title: 'DARK — качество, скорость и доступная цена!',
			description: 'Покупайте качественные шины с широким выбором вместе с DARK. Свяжитесь с нами и закажите нужную шину уже сегодня.',
			ogTitle: 'DARK — качество, скорость и доступная цена!',
			ogDescription: 'Высокое качество, широкий ассортимент и быстрый сервис — только в DARK.',
			twitterTitle: 'DARK — качество, скорость и доступная цена!',
			twitterDescription: 'Качественные шины, широкий выбор и оперативное обслуживание. Закажите прямо сейчас.'
		},

		en: {
			title: 'DARK — Quality, Speed, and Affordability!',
			description: 'Buy high-quality tires with a wide selection at DARK. Contact us today and order the tire you need quickly and easily.',
			ogTitle: 'DARK — Quality, Speed, and Affordability!',
			ogDescription: 'Premium tires, wide selection, and fast service — all available at DARK.',
			twitterTitle: 'DARK — Quality, Speed, and Affordability!',
			twitterDescription: 'High-quality tires, wide options, and fast service. Order the tire you need today.'
		}
	}

	return content[lang] || content.uz
}

// Page-specific SEO - Dynamic based on language
useSeoMeta({
	title: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').title),
	description: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').description),
	ogTitle: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').ogTitle),
	ogDescription: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').ogDescription),
	ogImage: '/images/og.png',
	ogUrl: 'https://dark-landing-pi.vercel.app/',
	twitterTitle: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').twitterTitle),
	twitterDescription: computed(() => getDarkHomepageSeoContent(locale?.value || 'uz').twitterDescription),
	twitterImage: '/images/og.png'
})
</script>
