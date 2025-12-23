<template>
	<div id="hero" class="md:container md:py-10 md:min-h-screen">
		<div class="bg-black md:rounded-[48px] h-full flex flex-col pb-10 md:pb-10 md:min-h-[calc(100vh-80px)] relative overflow-hidden z-10">
			<Header />
			<section class="flex items-center flex-col-reverse lg:flex-row gap-2">
				<div class="flex flex-col justify-center items-start px-4 md:pl-16">
					<div class="relative z-1 w-full">
						<h1 class="text-xl md:text-5xl lg:text-[44px] font-semibold !leading-140 font-adero-trial">DARK - qulay, sifatli va hamyonbop!</h1>
						<NuxtImg src="/images/divider.webp" class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-[-1] h-auto min-w-[650px] object-cover" />
					</div>
					<p class="text-sm md:text-xl lg:text-2xl mt-2 mb-8">Eng sifatli va xilma-xil mahsulotlar faqat bizda. Biz bilan bog’lanib orzuyingizdagi skuterga ega bo’ling.</p>
					<div class="flex w-full flex-col md:flex-row gap-4">
						<button class="w-full md:w-fit flex items-center justify-center gap-2 bg-orange px-4 py-3 rounded-full shadow-button transition-300 active:scale-95">
							<span class="font-semibold font-adero-trial">Mahsulotlar</span>
							<NuxtImg src="/images/hero-product-btn-icon.svg" alt="arrow" class="size-6 flex-shrink-0" />
						</button>
						<button class="w-full md:w-fit flex items-center justify-center gap-2 bg-black/50 border-2 border-white/20 px-4 py-3 rounded-full transition-300 active:scale-95">
							<span class="font-semibold font-adero-trial">Nega biz</span>
							<NuxtImg src="/images/arrow-right.svg" alt="arrow" class="size-6 flex-shrink-0" />
						</button>
					</div>
				</div>
				<div class="max-w-[300px] md:max-w-[450px] lg:max-w-[600px] w-full aspect-square">
					<NuxtImg src="/images/hero-dark-logo.webp" alt="hero image" class="w-full h-full object-contain" />
				</div>
			</section>
			<NuxtImg src="/images/hero-bg.webp" alt="dots" class="absolute w-full h-full top-0 left-0 z-[-1]" />
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
