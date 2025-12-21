<template>
	<div class="flex flex-col items-start gap-4 group">
		<div class="flex items-center justify-center bg-gray border-2 border-white/10 rounded-[32px] w-full">
			<NuxtImg src="/images/product.webp" alt="product image" class="max-w-[251px] aspect-[251/300] sm:aspect-[251/334] object-contain transition-300 group-hover:scale-110" />
		</div>
		<div class="flex flex-col gap-2">
			<h3 class="text-lg sm:text-xl font-extrabold leading-130 font-adero-trial">Qariyalar uchun mapet</h3>
			<p class="text-sm leading-140 font-medium line-clamp-2">
				Ushbu shinalar yil davomida har qanday ob-havo sharoitida xavfsiz harakatlanish uchun mo‘ljallangan. Agar siz har mavsumda shina almashtirish tashvishidan qutulmoqchi
				bo‘lsangiz, aynan hozir ularni xarid qilishning ayni vaqti. Bizning shinalarni tanlashingizga asosiy sabab — ularning yuqori chidamliligi, barcha turdagi yo‘llarda
				barqarorligi va hamyoningizni tejashidir.
			</p>
		</div>
		<button class="flex items-center justify-center bg-orange text-center gap-2 bg-blue/[0.08] px-3 py-2 rounded-xl sm:rounded-full transition active:scale-95 group w-full">
			<span class="text-lg sm:text-xl font-bold text-white"> 2 200 000 UZS </span>
			<NuxtImg src="/images/arrow-up-right.svg" class="size-5 sm:size-6" />
		</button>
	</div>
</template>

<script setup></script>

<style scoped></style>
