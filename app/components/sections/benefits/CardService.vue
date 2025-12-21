<template>
	<div
		ref="cardRef"
		class="flex flex-col items-start justify-between border-2 border-white/10 bg-dark-1 relative overflow-hidden w-full rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] z-1"
	>
		<div class="px-6 pt-6 flex flex-col gap-2">
			<h3 class="text-base md:text-2xl !leading-140 font-extrabold font-adero-trial text-white">Yuqori servise hizmatlarni faqat biz tavsiya qilamiz</h3>
			<p class="text-sm sm:text-base !leading-140 text-white">
				Biz sizga yuqori malakaga ega ustalarni tavsiya qilamiz. Xa noto’g’ri o’qimadingiz, biz sizga faqat qulaylikni tilaymiz.
			</p>
		</div>
		<NuxtImg src="/images/benefits-service-product.webp" alt="Service card" class="mx-auto w-[374px] aspect-[187/234] object-contain" />
		<NuxtImg src="/images/benefits-service-bg.webp" alt="overlay" class="absolute w-full left-0 -bottom-4 z-0" />
	</div>
</template>

<script setup></script>
