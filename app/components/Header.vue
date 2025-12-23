<template>
	<header class="max-w-[1312px] w-full" :class="isSticky ? 'fixed top-0 md:top-6  left-1/2 -translate-x-1/2 z-50' : 'relative md:mx-6 md:mt-6'">
		<div class="flex items-center justify-between bg-black/60 py-3 border-dark-1/50 md:border-2 md:rounded-full backdrop-blur-lg px-2 md:p-[8px_12px_8px_8px]">
			<div class="flex items-center h-12 md:h-[60px] md:bg-black/60 md:border-dark-1/50 md:border-2 md:rounded-full md:px-6 md:py-4">
				<NuxtLinkLocale to="/" class="flex-shrink-0">
					<NuxtImg src="/images/logo.webp" alt="Dark Logo" class="h-10 lg:h-7 mr-2 md:mr-4 lg:mr-10" />
				</NuxtLinkLocale>
				<!-- Desktop nav -->
				<nav class="hidden lg:flex gap-4 xl:gap-6 font-medium text-sm xl:text-base !leading-140 relative" role="navigation" aria-label="Main navigation">
					<NuxtLink
						v-for="item in navItems"
						:key="item.id"
						:to="{ path: '/', hash: `#${item.id}` }"
						class="transition-all duration-300 ease-in-out whitespace-nowrap hover:text-orange"
					>
						{{ $t(item.label) }}
					</NuxtLink>
				</nav>
			</div>
			<div class="flex items-center gap-3">
				<LanguageSwitcher />
				<button
					class="hidden bg-orange h-12 lg:flex items-center justify-center gap-2 font-semibold text-sm leading-140 font-adero-trial px-4 py-3 rounded-full bg-[linear-gradient(180deg,_#FF834B_0%,_#FF4E13_100%)] shadow-[0_284px_80px_0_rgba(255,78,19,0.01),0_182px_73px_0_rgba(255,78,19,0.12),0_102px_61px_0_rgba(255,78,19,0.40),0_45px_45px_0_rgba(255,78,19,0.88),0_11px_25px_0_rgba(255,78,19,0.79)] transition-300 active:scale-95"
					@click="isOpenModal = true"
				>
					Bog’lanish
					<NuxtImg src="/images/call.svg" alt="arrow" class="size-6 flex-shrink-0" />
				</button>
				<!-- Mobile menu toggle -->
				<button
					class="lg:hidden flex items-center justify-center p-2 rounded-[48px] bg-dark-1/50 hover:bg-dark-1/70 transition-300 active:scale-95"
					aria-label="Open menu"
					@click="isOpen = !isOpen"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-menu-icon lucide-menu"
					>
						<path d="M4 5h16" />
						<path d="M4 12h16" />
						<path d="M4 19h16" />
					</svg>
				</button>
			</div>
		</div>
		<Transition
			enter-active-class="transition-all duration-500 ease-out"
			leave-active-class="transition-all duration-400 ease-in"
			enter-from-class="translate-x-full opacity-0"
			enter-to-class="translate-x-0 opacity-100"
			leave-from-class="translate-x-0 opacity-100"
			leave-to-class="translate-x-full opacity-0"
		>
			<!-- Mobile menu -->
			<Teleport to="body">
				<div v-if="isOpen" class="fixed inset-0 px-4 w-full h-full overflow-hidden bg-black/95 backdrop-blur-sm z-50 block lg:hidden">
					<div class="flex flex-col gap-6 h-full py-8 overflow-y-scroll">
						<div class="flex items-center justify-between">
							<NuxtLinkLocale to="/" class="flex-shrink-0">
								<NuxtImg src="/images/logo.webp" alt="Dark Logo" class="h-8 md:h-10 lg:h-7 mr-2 md:mr-4 lg:mr-10" />
							</NuxtLinkLocale>
							<button class="rounded-[48px] bg-dark-1/50 hover:bg-dark-1/70 transition-300 active:scale-95" aria-label="Close menu" @click="isOpen = false">
								<NuxtImg src="/images/close-icon.svg" alt="Close menu" class="size-6" />
							</button>
						</div>
						<nav class="flex flex-col gap-3 mt-10">
							<NuxtLink
								v-for="item in navItems"
								:key="item.id"
								:to="{ path: '/', hash: `#${item.id}` }"
								class="text-white bg-dark w-full py-3 px-4 rounded-xl text-lg font-semibold hover:text-orange transition-all duration-300"
							>
								{{ $t(item.label) }}
							</NuxtLink>
						</nav>
						<div class="flex flex-col gap-5 mta">
							<button class="bg-orange px-6 py-3 rounded-full font-semibold text-white shadow-lg active:scale-95 transition-300" @click="isOpen = false">Bog’lanish</button>
						</div>
					</div>
				</div>
			</Teleport>
		</Transition>
		<FormModal v-model="isOpenModal" @close="isOpenModal = false" />
	</header>
</template>

<script setup>
import FormModal from '~/components/sections/form/FormModal.vue'

const route = useRoute()

const isSticky = ref(false)
const isOpen = ref(false)
const isOpenModal = ref(false)

const navItems = [
	{ id: 'products', label: 'products' },
	{ id: 'benefits', label: 'benefits' },
	{ id: 'why', label: 'why_dark' },
	{ id: 'faq', label: 'faq' }
]

const handleScroll = () => {
	isSticky.value = window.scrollY > 100
}

watch(isOpen, (val) => {
	if (val) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})
watch(
	() => route.fullPath,
	() => {
		isOpen.value = false
	}
)

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>
