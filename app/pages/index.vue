<template>
	<div class="flex-1">
		<HeroSection />
		<BlogSection />
		<ProductSection />
		<AboutSection />
		<BenefitsSection />
		<WhySection />
		<!-- <BranchesSection /> -->
		<FaqSection />
	</div>
</template>

<script setup>
import AboutSection from '~/components/sections/about/AboutSection.vue'
import BenefitsSection from '~/components/sections/benefits/BenefitsSection.vue'
import BlogSection from '~/components/sections/blog/BlogSection.vue'
// import BranchesSection from '~/components/sections/branches/BranchesSection.vue'
import FaqSection from '~/components/sections/faq/FaqSection.vue'
import ProductSection from '~/components/sections/products/ProductSection.vue'
import WhySection from '~/components/sections/why/WhySection.vue'
import HeroSection from '~/components/sections/hero/HeroSection.vue'

const { scrollToSection } = useNavigation()

onMounted(() => {
	const hash = window.location.hash
	if (hash) {
		const sectionId = hash.substring(1)
		setTimeout(() => {
			scrollToSection(sectionId)
		}, 300)
	}
})
</script>
