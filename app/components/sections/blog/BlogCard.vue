<template>
	<div class="relative z-10 overflow-hidden rounded-3xl md:rounded-[48px] p-4 md:p-8 lg:p-10 min-h-[220px] md:min-h-[400px] flex flex-col items-start bg-orange-600">
		<img src="/images/blog.webp" :alt="title" class="absolute inset-0 w-full h-full object-cover z-[-1] pointer-events-none" />

		<h3 class="text-xl md:text-4xl lg:text-5xl font-bold !leading-130 text-white sm:whitespace-pre-line font-adero-trial mb-7">{{ title }}</h3>

		<div class="flex flex-col gap-3">
			<div class="px-3 py-1 bg-dark rounded-full">
				<span class="text-xl md:text-2xl lg:text-[32px] text-white !leading-130">{{ formatMoneyDecimal(price) }} </span>
			</div>
			<span v-if="oldPrice" class="text-lg md:text-2xl !leading-130 line-through text-white">{{ formatMoneyDecimal(oldPrice) }}</span>
		</div>

		<p class="text-lg md:text-2xl font-extrabold !leading-130 text-white font-adero-trial mt-auto">{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	price: number
	oldPrice: number
	description: string
	image: string
}>()
</script>

<style scoped></style>
