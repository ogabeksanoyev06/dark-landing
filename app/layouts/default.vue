<template>
	<div class="flex flex-col min-h-screen">
		<slot />

		<Footer />
	</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

const handleScroll = () => {
	isSticky.value = window.scrollY > 300
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>
