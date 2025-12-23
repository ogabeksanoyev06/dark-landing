<template>
	<div
		class="bg-dark-1 border border-white/10 hover:border-orange rounded-[28px] p-3 sm:px-4 sm:py-3 flex gap-4 items-center cursor-pointer relative hover:shadow-[0_35px_77px_0_rgba(255,84,26,0.15)] group transition-300"
		:class="{ ' !border-orange card-active': isActive }"
		@click.stop="$emit('click', branch)"
	>
		<!-- Branch Details -->
		<div class="flex-1 flex items-center justify-between">
			<div class="flex flex-col gap-2 flex-1">
				<h3 class="font-bold text-base md:text-2xl leading-130">{{ branch.name }}</h3>
				<div class="flex gap-2 flex-wrap">
					<div class="flex gap-1 items-center">
						<NuxtImg src="/images/location.svg" alt="location icon" class="size-5 shrink-0" />
						<p class="text-sm leading-130 flex-1">{{ branch.address || 'Address not available' }}</p>
					</div>
					<div class="flex gap-1 items-center">
						<NuxtImg src="/images/phone-icon.svg" alt="location icon" class="size-5 shrink-0" />
						<p class="text-sm leading-130 flex-1">{{ formatPhoneNumber(branch.phone) || 'Address not available' }}</p>
					</div>
				</div>
			</div>
			<div class="size-6 md:size-8 flex-center bg-white rounded-full p-[4px_3px_4px_5px]">
				<NuxtImg src="/images/chevron-right.svg" alt="arrow right icon" class="size-6 transition-300" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Branch {
	near_to_metro?: boolean
	length_from_metro?: number
	id: number
	name: string
	address?: string
	image?: string
	latitude?: number
	longitude?: number
	phone?: string
}

interface Props {
	branch: Branch
	isActive?: boolean
}

defineProps<Props>()

defineEmits<{
	click: [branch: Branch]
	clickToTarget: [branch: Branch]
}>()
</script>
