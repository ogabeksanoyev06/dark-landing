<template>
	<Teleport to="body">
		<div
			:class="[wrapperClass, { '!opacity-100 !visible': value }]"
			data-modal="wrapper"
			class="fixed w-full h-full bg-black/50 backdrop-blur-lg flex justify-center z-[100] top-0 left-0 invisible opacity-0 transition-all duration-300 items-center p-3"
			@click="handleOuterClick"
		>
			<Transition name="modal" mode="out-in">
				<div
					v-if="value"
					class="bg-dark-1 border-2 border-white/10 w-full lg:max-w-[500px] relative max-h-screen md:overflow-y-auto rounded-[28px]"
					:class="[bodyClass, { animated: animationIn }]"
				>
					<slot />
				</div>
			</Transition>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
interface Props {
	title?: string
	wrapperClass?: string | string[]
	modalClass?: string | string[]
	noHeader?: boolean
	disableOuterClose?: boolean
	bodyClass?: string | string[]
	hasCloseIcon?: boolean
	titleStyle?: string
	headerStyle?: string
}
const props = withDefaults(defineProps<Props>(), {
	title: 'Modal title',
	titleStyle: '',
	headerStyle: '',
	wrapperClass: '',
	bodyClass: '',
	modalClass: ''
})

interface Emits {
	(e: 'outer-click'): void
}
const emit = defineEmits<Emits>()
const value = defineModel<boolean>('modelValue', { required: true })
const animationIn = ref(false)

function handleOuterClick(e: Event) {
	const target = e.target as HTMLElement
	if (target.dataset?.modal == 'wrapper') {
		emit('outer-click')
		if (!props.disableOuterClose) {
			value.value = false
		} else {
			animationIn.value = true
			setTimeout(() => {
				animationIn.value = false
			}, 500)
		}
	}
}

watch(
	() => value.value,
	(val) => {
		if (val) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}
)
onMounted(() => {
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !props.disableOuterClose) {
			value.value = false
		}
	})
})
</script>

<style scoped>
@keyframes modal {
	from {
		opacity: 0;
		transform: translateY(-40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.modal-enter-active {
	animation: modal 0.3s ease-in-out;
}
.modal-leave-active {
	animation: modal 0.3s ease-in-out reverse;
}

@keyframes mobile-modal {
	from {
		opacity: 0;
		transform: translateY(50%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.mobile-modal-enter-active {
	animation: mobile-modal 0.5s ease-in-out;
}
.mobile-modal-leave-active {
	animation: mobile-modal 0.5s ease-in-out reverse;
}

.animated {
	animation: horizontal-shaking 0.4s ease-in-out;
}
</style>
