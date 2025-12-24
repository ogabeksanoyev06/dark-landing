<template>
	<div class="w-full">
		<div class="relative grid gap-1 bg-black/60 p-0.5 rounded-full overflow-x-auto scrollbar-hide" :style="{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }">
			<div
				class="absolute top-0.5 bottom-0.5 bg-black rounded-full shadow-sm transition-all duration-300 ease-in-out"
				:style="{
					width: `calc(${100 / tabs.length}% - 4px)`,
					left: `calc(${activeTab * (100 / tabs.length)}% + 2px)`
				}"
			/>
			<button
				v-for="(tab, index) in tabs"
				:key="index"
				:ref="
					(el) => {
						if (el) tabRefs[index] = el as HTMLElement
					}
				"
				:class="['relative z-1 py-3 text-sm font-semibold leading-130 transition-300 whitespace-nowrap flex-shrink-0', activeTab === index ? 'text-[#fff]' : 'text-[#fff]']"
				@click="selectTab(index)"
			>
				{{ tab.label }}
			</button>
		</div>
		<div class="mt-4 md:mt-6">
			<slot :activeTab="activeTab" :activeTabData="tabs[activeTab]" />
		</div>
	</div>
</template>

<script setup lang="ts">
interface Tab {
	label: string
	content?: string
	[key: string]: any
}

interface Props {
	tabs: Tab[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
	change: [index: number, tab: Tab]
}>()

const activeTab = defineModel<number>('modelValue', { required: true })
const tabRefs = ref<Record<number, HTMLElement>>({})

const selectTab = (index: number) => {
	activeTab.value = index
}
</script>

<style scoped>
.scrollbar-hide {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
	display: none;
}
</style>
