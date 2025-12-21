<template>
	<div ref="dropdown" class="relative" data-dropdown="0" tabindex="0">
		<div
			class="flex items-center gap-2 bg-dark-1/50 lg:bg-transparent lg:border-2 lg:border-white/20 p-2 lg:p-3 rounded-full shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer"
			:class="{ '!bg-white': showDropdown }"
			@click="handleDropdownToggle"
		>
			<NuxtImg :src="currentLanguage?.flag" alt="Uzbekistan Flag" class="size-6" />
			<span class="text-sm font-semibold uppercase font-adero-trial leading-140" :class="{ '!text-orange': showDropdown }">{{ currentLanguage?.code }}</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				class="transition-transform duration-300"
				:class="showDropdown ? 'rotate-0 ' : 'rotate-180 '"
			>
				<path d="M15.833 12.5L9.99967 6.66667L4.16634 12.5" :stroke="showDropdown ? '#FF541A' : '#fff'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95"
		>
			<div v-if="showDropdown" data-dropdown-body class="absolute right-0 w-max min-w-[188px] translate-y-full -bottom-3 overflow-hidden bg-[#F5F6F9] rounded-2xl z-50">
				<div v-for="(lang, index) in languagesList" :key="index" class="w-full group border-b border-[#0000001F] last:border-none">
					<div class="flex items-center justify-between gap-2 p-3 cursor-pointer transition-300" @click="onChangeLocale(lang.code)">
						<div class="flex items-center gap-2">
							<NuxtImg :src="lang.flag" :alt="`${lang.name} Flag`" class="size-6" />
							<span class="text-left text-dark text-sm font-medium leading-140">
								{{ lang.name }}
							</span>
						</div>
						<NuxtImg v-if="lang.code === currentLanguage?.code" src="/images/tick.svg" alt="check icon" class="size-5 transition-300" />
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
const { changeLocale, currentLanguage, languagesList } = useLanguageSwitcher()

const showDropdown = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const handleDropdownToggle = () => {
	showDropdown.value = !showDropdown.value
}

const onChangeLocale = (code: string) => {
	showDropdown.value = false
	changeLocale(code)
}

// 🔍 tashqariga click bo‘lsa yopish
const handleClickOutside = (event: MouseEvent) => {
	if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
		showDropdown.value = false
	}
}

// 🔍 scroll bo‘lsa yopish
const handleScroll = () => {
	showDropdown.value = false
}

onMounted(() => {
	document.addEventListener('click', handleClickOutside)
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside)
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@keyframes dropdown-enter {
	0% {
		opacity: 0;
		transform: translateY(-6px) scale(0.96);
	}
	100% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
}

@keyframes dropdown-leave {
	0% {
		opacity: 1;
		transform: translateY(0) scale(1);
	}
	100% {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}
}

.dropdown-enter-active {
	animation: dropdown-enter 0.18s cubic-bezier(0.25, 0.8, 0.5, 1);
	will-change: transform, opacity;
}

.dropdown-leave-active {
	animation: dropdown-leave 0.15s cubic-bezier(0.45, 0, 0.75, 0.9);
	will-change: transform, opacity;
}
</style>
