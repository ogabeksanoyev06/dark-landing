<template>
	<div ref="cardRef" class="bg-dark-1 border-2 border-white/10 p-6 sm:p-7 lg:p-8 relative z-10 overflow-hidden w-full h-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px]">
		<div class="flex flex-col items-start gap-2 max-w-[358px] w-full">
			<h3 class="text-lg md:text-2xl lg:text-3xl !leading-140 font-extrabold font-adero-trial">
				<span class="font-bold text text-orange text-[48px]">5</span> <span class="text-orange font-adero-trial">qadam</span> va balanslangan mahsulot
			</h3>
			<p class="text-sm md:text-base lg:text-xl !leading-140">
				Mahsulotimiz sizga davomli xizmat qiladi. Bizning quvvatlagich sizga 5 yil beminnat hizmat qiladi. Quvvatlagich eng so’ngi tehnologiya bo’yicha ishlab chiqarilgan.
			</p>
		</div>
		<NuxtImg src="/images/benefits-brand-bg-logo.svg" alt="Logo" class="absolute top-6 right-0 w-[445px]" />
		<NuxtImg src="/images/benefits-product.webp" alt="overlay" class="lg:block hidden absolute w-[420px] aspect-square right-0 -bottom-0 z-[-1]" />
	</div>
</template>

<script setup></script>
