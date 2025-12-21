<template>
	<section ref="blog" class="py-10 overflow-hidden">
		<div class="container">
			<div class="flex items-center gap-2 mb-6">
				<NuxtImg src="/images/lightbulb-icon.svg" alt="icon" class="size-8 h-10 shrink-0" />
				<h2 class="section-title">Qaynoq yangiliklar</h2>
			</div>
			<transition name="mode">
				<div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 gap-6 overflow-hidden">
					<BlogLoading v-for="key in 2" :key />
				</div>
				<div v-else class="w-full sm:max-w-[800px]">
					<Swiper v-bind="settings" class="!overflow-visible !w-full">
						<SwiperSlide v-for="key in 5" :key="key">
							<BlogCard title="Qaynoq&#10;chegirma" description="Qariyalar uchun mapet" :price="1222000" :old-price="2000000" />
						</SwiperSlide>
					</Swiper>
				</div>
			</transition>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import BlogCard from './BlogCard.vue'
import BlogLoading from './BlogLoading.vue'

const settings = {
	modules: [Autoplay],
	spaceBetween: 24,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	breakpoints: {
		300: { slidesPerView: 1.1, spaceBetween: 12, centeredSlides: true },
		768: { slidesPerView: 1.05 }
	}
}
const loading = ref(false)
</script>

<style scoped></style>
