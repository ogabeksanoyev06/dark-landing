<template>
	<section id="about" class="container py-10">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col items-center gap-6 text-center">
				<NuxtImg src="/images/about-dark-logo.webp" alt="about image" class="h-20 sm:h-[100px] object-contain" />
				<div class="flex flex-col gap-4">
					<h3 class="text-xl md:text-2xl lg:text-[28px] font-bold !leading-130">{{ $t('about_brand_title') }}</h3>
					<p class="text-base md:text-lg lg:text-xl font-medium !leading-130">
						{{ $t('about_brand_description') }}
					</p>
				</div>
				<div class="flex flex-col justify-center sm:flex-row gap-4 w-full">
					<button class="flex items-center justify-center gap-2 bg-white border-2 border-dark rounded-full px-4 py-3 transition-300 active:scale-95">
						<span class="text-sm font-semibold leading-140 font-adero-trial text-dark">{{ $t('about_btn_partner') }}</span>
						<NuxtImg src="/images/about-partner-icon.svg" alt="about partner" class="size-6 aspect-square" />
					</button>
					<button class="flex items-center justify-center gap-2 bg-gradient-to-b from-[#FF834B] to-[#FF4E13] shadow-button rounded-full px-4 py-3 transition-300 active:scale-95">
						<span class="text-sm font-semibold leading-140 font-adero-trial text-white">{{ $t('contact_us') }}</span>
						<NuxtImg src="/images/call.svg" alt="about partner" class="size-6 aspect-square" />
					</button>
				</div>
			</div>
			<AboutCard />
		</div>
	</section>
</template>
<script setup>
import AboutCard from '~/components/sections/about/AboutCard.vue'
</script>
