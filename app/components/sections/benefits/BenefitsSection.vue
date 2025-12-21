<template>
	<section id="benefits" class="container py-10">
		<div class="flex flex-col gap-6">
			<div class="flex items-center gap-2">
				<NuxtImg src="/images/features-icon.svg" alt="features icon" class="size-8 shrink-0" />
				<h2 class="section-title">Afzalliklarimiz</h2>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
				<!-- LEFT COLUMN -->
				<div class="grid gap-5 lg:col-span-5">
					<CardBrand />
					<CardService />
				</div>

				<!-- RIGHT COLUMN -->
				<div class="flex flex-col gap-5 lg:col-span-7">
					<!-- Top cards -->

					<!-- Bottom card -->
					<CardProduct />
					<div class="grid grid-cols-1 md:grid-cols-7 gap-5">
						<div class="flex flex-col gap-5 md:col-span-3">
							<CardDelivery />
							<CardSupport />
						</div>

						<div class="md:col-span-4">
							<CardFeatures />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import CardBrand from '~/components/sections/benefits/CardBrand.vue'
import CardService from '~/components/sections/benefits/CardService.vue'
import CardDelivery from '~/components/sections/benefits/CardDelivery.vue'
import CardSupport from '~/components/sections/benefits/CardSupport.vue'
import CardFeatures from '~/components/sections/benefits/CardFeatures.vue'
import CardProduct from '~/components/sections/benefits/CardProduct.vue'
</script>
