<template>
	<div
		ref="cardRef"
		class="flex flex-col items-center text-center gap-5 bg-dark-1 border-2 border-white/10 p-4 relative overflow-hidden w-full h-[175px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
	>
		<NuxtImg src="/images/card-support-icon.webp" alt="image" class="size-14 aspect-square object-contain" />
		<div class="grid gap-1">
			<h3
				class="text-xl font-extrabold leading-140 font-adero-trial bg-[linear-gradient(90deg,#FFC288_13.92%,#FF541A_41.27%,#FFC288_66.7%,#FF541A_83.52%)] bg-clip-text text-transparent"
			>
				Rasmiy kafolat
			</h3>
			<p class="text-xs leading-140 text-white">Kafolatlangan mahsulot ishonch belgisidir</p>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.glass-card {
	background: rgba(0, 0, 0, 0);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 2px solid rgba(255, 255, 255, 0.2);
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.1),
		inset 0 1px 0 rgba(255, 255, 255, 0.5),
		inset 0 -1px 0 rgba(255, 255, 255, 0.1),
		inset 0 0 0px 0px rgba(255, 255, 255, 0);
	position: relative;
	overflow: hidden;
	transition: 300ms ease-in-out;
}

.glass-card::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 1px;
	background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.glass-card::after {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), transparent, rgba(255, 255, 255, 0.3));
}
</style>
