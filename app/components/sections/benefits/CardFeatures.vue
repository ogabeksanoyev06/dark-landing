<template>
	<div
		ref="cardRef"
		class="flex flex-col items-center justify-between text-center gap-5 bg-dark-1 border-2 border-white/10 pt-6 sm:pt-8 lg:pt-16 pb-6 md:pb-8 lg:pb-12 relative z-1 overflow-hidden w-full h-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]"
	>
		<div class="flex flex-col items-center text-center px-[14px]">
			<div class="relative glass-card card-1 py-2 sm:py-3 px-6 sm:px-8 lg:px-9 flex items-center gap-4 sm:gap-6 lg:gap-[30px] rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
				<div class="bg-orange rounded-full p-3 sm:p-4 lg:p-[18px]">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-6 sm:size-7 lg:size-9" />
				</div>
				<p class="text-base sm:text-lg lg:text-2xl font-bold leading-130">Ekologiyaga zararsiz</p>
			</div>
			<div
				class="absolute -top-1 sm:-top-2 glass-card card-2 py-1.5 sm:py-2 px-4 sm:px-5 lg:px-6 flex items-center gap-3 sm:gap-4 lg:gap-5 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]"
			>
				<div class="bg-orange rounded-full p-2 sm:p-2.5 lg:p-3">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-4 sm:size-5 lg:size-6" />
				</div>
				<div class="text-sm sm:text-base font-bold leading-130">Oldindan ogohlantirilgan narx</div>
			</div>
			<div
				class="absolute -top-3 sm:-top-4 lg:-top-2 glass-card card-3 py-1.5 sm:py-1.5 px-3 sm:px-4 lg:px-[18px] flex items-center gap-2 sm:gap-3 lg:gap-[15px] rounded-2xl sm:rounded-3xl"
			>
				<div class="bg-orange rounded-full p-1.5 sm:p-2 lg:p-[9px]">
					<NuxtImg src="/images/checkflower-icon.svg" alt="Checkflower icon" class="size-3 sm:size-4 lg:size-[18px]" />
				</div>
				<div class="text-[10px] sm:text-xs font-bold leading-130">Past tovushda sayohat qilish</div>
			</div>
		</div>
		<div class="grid gap-2 px-4 sm:px-5 lg:px-7">
			<h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl !leading-140 font-bold">3 muhim afzallik</h3>
			<p class="text-sm sm:text-base !leading-140">
				Mahsulotimizni asosiy afzalliklaridan xabardormisiz? Biz nafaqat sizga qulay mahsulotni taklif qilamiz, balkim oltin 3 tamoyilni ham saqlab qolamiz.
			</p>
		</div>
		<NuxtImg src="/images/bg-card-features.webp" alt="overlay" class="absolute w-full h-full left-0 -bottom-0 z-[-1]" />
	</div>
</template>

<script setup></script>

<style scoped>
.glass-card {
	position: relative;
	overflow: hidden;
	cursor: pointer;

	background: rgba(20, 20, 20, 0.55);
	backdrop-filter: blur(20px) saturate(180%);
	-webkit-backdrop-filter: blur(20px) saturate(180%);

	border-radius: 999px;
	border: 0.5px solid rgba(255, 255, 255, 0.25);

	/* Apple depth */
	box-shadow:
		0 20px 50px rgba(0, 0, 0, 0.55),
		inset 0 1px 0 rgba(255, 255, 255, 0.45);

	transition:
		transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
		box-shadow 0.4s ease,
		background 0.4s ease;
}

.glass-card:hover {
	transform: translateY(-2px) scale(1.01);
	border-color: rgba(255, 255, 255, 0.35);

	box-shadow:
		0 18px 60px rgba(0, 0, 0, 0.45),
		inset 0 1px 0 rgba(255, 255, 255, 0.6),
		inset 0 -1px 0 rgba(255, 255, 255, 0.18);
}

.glass-card::before {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: inherit;
	background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), transparent 40%);
	opacity: 0.25;
	pointer-events: none;
}

@keyframes float-soft {
	0% {
		transform: translateY(0) translateZ(0);
	}
	50% {
		transform: translateY(-6px) translateZ(0);
	}
	100% {
		transform: translateY(0) translateZ(0);
	}
}

.card-1 {
	animation: float-soft 3.6s ease-in-out infinite;
	animation-delay: 0s;
}

.card-2 {
	animation: float-soft 4.2s ease-in-out infinite;
	animation-delay: 0.4s;
}

.card-3 {
	animation: float-soft 4.8s ease-in-out infinite;
	animation-delay: 0.8s;
}

/* Hover paytida float to‘xtasin — jitter bo‘lmasin */
.glass-card:hover {
	animation-play-state: paused;
}
</style>
