<template>
	<div>
		<div v-if="loading" class="flex flex-col gap-4">
			<div v-for="key in 5" :key class="rounded-2xl cursor-pointer h-10 sm:h-14 flex items-center justify-between px-4">
				<div class="w-3/4 h-full rounded-xl skeleton"></div>
				<div class="size-10 sm:size-12 rounded-full skeleton"></div>
			</div>
		</div>
		<div class="!bg-dark-1 border-2 border-white/10 rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] px-6 sm:px-8">
			<div v-for="(item, index) in accordionItems" :key="index" class="border-b border-white/10 last:border-b-0 cursor-pointer">
				<div class="w-full gap-4 text-left py-6 lg:py-8" @click="toggleItem(index)">
					<div class="flex items-center justify-between">
						<h3 class="text-base font-adero-trial sm:text-xl lg:text-[28px] font-bold !leading-140">
							{{ item.title }}
						</h3>
						<div
							class="size-10 sm:size-12 lg:size-[54px] bg-dark-4 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0"
							:class="{ 'rotate-180': activeIndex === index }"
						>
							<NuxtImg :src="activeIndex === index ? '/images/minus-icon.svg' : '/images/plus-icon.svg'" class="w-6 sm:w-8" alt="Toggle icon" />
						</div>
					</div>
					<transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
						<div v-show="activeIndex === index">
							<div class="pt-5 sm:pt-7">
								<div class="text-sm sm:text-base lg:text-2xl !leading-140 opacity-90">
									{{ item.content }}
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const loading = ref(false)

const accordionItems = ref([
	{
		title: 'Skuterni qanday buyurtma qilsam bo‘ladi?',
		content:
			'Platforma orqali o‘zingizga yoqqan skuterni tanlaysiz yoki sizga yaqin bo‘lgan hududdagi hamkor do‘konlarimizdan buyurtma berishingiz mumkin. Buyurtma qoldirish uchun aloqa maʼlumotlaringizni kiritasiz. 24 soat ichida mutaxassislarimiz siz bilan bog‘lanib, buyurtmani rasmiylashtirib beradi.'
	},
	{
		title: 'To‘lov usullari qanday? Bo‘lib to‘lash imkoniyati bormi?',
		content:
			'To‘lovni naqd, bank kartasi orqali yoki hamkor moliyaviy tashkilotlar yordamida amalga oshirishingiz mumkin. Shuningdek, bo‘lib to‘lash (nasiya) imkoniyati ham mavjud. To‘lov shartlari tanlangan model va hamkorlarga qarab farqlanishi mumkin.'
	},
	{
		title: 'Kafolat nechchi oy va nimalarni o‘z ichiga oladi?',
		content:
			'Skuterlar uchun odatda 6 oydan 12 oygacha kafolat taqdim etiladi. Kafolat dvigatel, elektron qismlar va asosiy texnik nosozliklarni o‘z ichiga oladi. Mexanik shikastlanishlar va noto‘g‘ri foydalanish holatlari kafolat doirasiga kirmaydi.'
	},
	{
		title: 'Servis va ehtiyot qismlar bormi?',
		content:
			'Ha, servis xizmati va original ehtiyot qismlar mavjud. Texnik xizmat ko‘rsatish hamkor servis markazlarida amalga oshiriladi. Zarur ehtiyot qismlar tezkor yetkazib beriladi.'
	},
	{
		title: 'Qanday hujjatlar beriladi? Ro‘yxatdan o‘tkazish bo‘yicha yordam bo‘ladimi?',
		content:
			'Xarid vaqtida shartnoma, kafolat taloni va texnik hujjatlar taqdim etiladi. Zarur hollarda skuterni ro‘yxatdan o‘tkazish bo‘yicha ham maslahat va amaliy yordam ko‘rsatiladi.'
	},
	{
		title: 'Qaytarish yoki bekor qilish qanday ishlaydi?',
		content:
			'Buyurtmani belgilangan muddat ichida bekor qilish yoki mahsulotni qaytarish mumkin. Qaytarish shartlari mahsulot holati va amaldagi qoidalarga muvofiq amalga oshiriladi. Batafsil maʼlumotni mutaxassislarimizdan olishingiz mumkin.'
	}
])

const activeIndex = ref(null)

const toggleItem = (index) => {
	activeIndex.value = activeIndex.value === index ? null : index
}

function enter(el) {
	el.style.height = '0px'
	el.style.opacity = '0'
	void el.offsetHeight
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}

function afterEnter(el) {
	el.style.height = 'auto'
}

function leave(el) {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
	void el.offsetHeight
	el.style.height = '0px'
	el.style.opacity = '0'
}

function afterLeave(el) {
	el.style.height = '0px'
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	transition:
		height 0.3s ease,
		opacity 0.3s ease;
	overflow: hidden;
}
</style>
