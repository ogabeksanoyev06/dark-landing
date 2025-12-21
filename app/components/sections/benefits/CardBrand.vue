<template>
	<div
		ref="cardRef"
		class="flex items-center justify-center border-2 px-6 border-white/10 bg-dark-1 relative overflow-hidden w-full h-[180px] md:min-h-[295px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
	>
		<NuxtImg src="/images/logo.webp" alt="Logo" class="w-[356px] aspect-[178/51] object-contain float-on-hover" />
		<NuxtImg src="/images/benefits-brand-bg-logo.svg" alt="bg logo" class="absolute top-5 right-0" />
	</div>
</template>

<script setup></script>

<style scoped>
@keyframes scale-up {
	0%,
	100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.1);
	}
}
.float-on-hover {
	animation: scale-up 3s ease-in-out infinite;
}
</style>
