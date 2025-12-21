<template>
	<section id="faq" ref="sectionRef" class="container py-10 scroll-mt-20">
		<div class="space-y-6">
			<div class="flex items-center gap-2">
				<NuxtImg src="/images/faq-icon.svg" alt="faq icon" class="size-10 shrink-0" />
				<h2 class="section-title">Tez-tez beriladigan savollar</h2>
			</div>
			<Accordion />
		</div>
	</section>
</template>

<script setup lang="ts">
import Accordion from '~/components/sections/faq/Accordion.vue'
</script>

<style scoped></style>
