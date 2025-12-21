<template>
	<footer class="md:container pt-12 md:pb-12">
		<div class="bg-dark-1 md:rounded-[48px] overflow-hidden relative z-10">
			<NuxtImg
				src="/images/footer-bg.webp"
				alt="Footer background"
				class="absolute w-[1498px] aspect-[7/2] left-1 bottom-0 min-[1220px]:top-10 z-[-1] pointer-events-none select-none"
			/>
			<div class="hidden min-[1220px]:flex justify-between gap-5 py-8 px-12">
				<div class="flex flex-col gap-10 pt-6">
					<NuxtLinkLocale to="/" class="flex items-center shrink-0">
						<NuxtImg class="h-10 lg:h-14" src="/images/logo.webp" alt="logo" />
					</NuxtLinkLocale>
					<div class="flex space-x-2.5">
						<a
							href="https://instagram.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/instagram-icon.svg" alt="Instagram" class="size-5 aspect-square" />
						</a>

						<a
							href="https://t.me/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/telegram-icon.svg" alt="Telegram" class="size-5 aspect-square" />
						</a>

						<a
							href="https://facebook.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/facebook-icon.svg" alt="Facebook" class="size-5 aspect-square" />
						</a>

						<a
							href="https://x.com/USERNAME"
							target="_blank"
							rel="noopener noreferrer"
							class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
						>
							<NuxtImg src="/images/x-icon.svg" alt="X (Twitter)" class="size-5 aspect-square" />
						</a>
					</div>
				</div>
				<div class="flex flex-col gap-16 pt-6">
					<ul class="flex gap-6 lg:gap-10 font-medium text-base lg:text-lg leading-130">
						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('products')">
								{{ $t('products') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('benefits')">
								{{ $t('benefits') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('why')">
								{{ $t('why_bonvi') }}
							</button>
						</li>

						<li>
							<button class="text-left transition-300 hover:text-blue" @click="handleNavigation('faq')">
								{{ $t('faq') }}
							</button>
						</li>
					</ul>
					<ul class="flex items-center justify-between">
						<li class="flex items-center gap-x-2">
							<NuxtImg class="size-6" src="images/mail-icon.svg" alt="mail icon" />
							<a :href="`mailto:${'bunvi@gmail.com'}`" class="hover:text-blue transition-300 text-lg font-medium"> bunvi@gmail.com </a>
						</li>
						<li class="flex items-center gap-x-2">
							<NuxtImg class="size-6" src="images/phone-icon.svg" alt="mail icon" />
							<a :href="`tel:${'+998 97 991-62-20'}`" class="hover:text-blue transition-300 text-lg font-medium"> +998 97 991-62-20 </a>
						</li>
					</ul>
				</div>
				<div class="flex items-start gap-6">
					<div class="flex flex-col gap-2.5">
						<div class="bg-white/10 p-3 size-[160px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" alt="App Store" />
						</div>
						<div class="bg-white/10 py-4 px-5 w-[160px] rounded-xl">
							<NuxtImg src="/images/app-store.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="bg-white/10 backdrop-blur-[10px] p-3 size-[160px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" />
						</div>
						<div class="bg-white/10 backdrop-blur-[10px] py-4 px-5 w-[160px] rounded-xl">
							<NuxtImg src="/images/google-play.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
				</div>
			</div>
			<div class="max-[1220px]:flex flex-col items-center hidden py-6 px-5">
				<NuxtLinkLocale to="/" class="flex items-center shrink-0 mb-6">
					<NuxtImg class="h-10 lg:h-14" src="/images/logo.webp" alt="logo" />
				</NuxtLinkLocale>

				<!-- Social Media Icons -->
				<div class="flex justify-center items-center gap-3 mb-6 w-full">
					<a
						href="https://instagram.com/USERNAME"
						target="_blank"
						rel="noopener noreferrer"
						class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
					>
						<NuxtImg src="/images/instagram-icon.svg" alt="Instagram" class="size-5 aspect-square" />
					</a>

					<a
						href="https://t.me/USERNAME"
						target="_blank"
						rel="noopener noreferrer"
						class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
					>
						<NuxtImg src="/images/telegram-icon.svg" alt="Telegram" class="size-5 aspect-square" />
					</a>

					<a
						href="https://facebook.com/USERNAME"
						target="_blank"
						rel="noopener noreferrer"
						class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
					>
						<NuxtImg src="/images/facebook-icon.svg" alt="Facebook" class="size-5 aspect-square" />
					</a>

					<a
						href="https://x.com/USERNAME"
						target="_blank"
						rel="noopener noreferrer"
						class="size-8 flex items-center justify-center p-[5px] rounded-full bg-gradient-to-b from-[#FF834B] to-[#FF4E13] hover:scale-110 transition-300"
					>
						<NuxtImg src="/images/x-icon.svg" alt="X (Twitter)" class="size-5 aspect-square" />
					</a>
				</div>

				<!-- Navigation Menu -->
				<div class="mb-6 w-full">
					<div class="grid grid-cols-1 gap-2 max-w-sm mx-auto">
						<button
							class="flex items-center justify-center py-3 px-4 bg-dark-3/50 backdrop-blur-sm rounded-xl font-medium hover:bg-dark-3 hover:text-orange transition-300 min-h-[44px]"
							@click="handleNavigation('functions')"
						>
							{{ $t('products') }}
						</button>
						<button
							class="flex items-center justify-center py-3 px-4 bg-dark-3/50 backdrop-blur-sm rounded-xl font-medium hover:bg-dark-3 hover:text-orange transition-300 min-h-[44px]"
							@click="handleNavigation('benefits')"
						>
							{{ $t('benefits') }}
						</button>
						<button
							class="flex items-center justify-center py-3 px-4 bg-dark-3/50 backdrop-blur-sm rounded-xl font-medium hover:bg-dark-3 hover:text-orange transition-300 min-h-[44px]"
							@click="handleNavigation('why')"
						>
							{{ $t('why_bonvi') }}
						</button>
						<button
							class="flex items-center justify-center py-3 px-4 bg-dark-3/50 backdrop-blur-sm rounded-xl font-medium hover:bg-dark-3 hover:text-orange transition-300 min-h-[44px]"
							@click="handleNavigation('faq')"
						>
							{{ $t('faq') }}
						</button>
					</div>
				</div>

				<!-- Contact Information -->
				<div class="bg-dark-3/50 backdrop-blur-sm rounded-2xl p-4 mb-4 max-w-sm mx-auto w-full">
					<h3 class="text-xs font-semibold uppercase tracking-wider mb-3 text-center">{{ $t('contact_us') }}</h3>
					<div class="space-y-2">
						<a :href="`mailto:${'info@dark.uz'}`" class="flex items-center justify-center gap-2 p-2 hover:bg-white/30 rounded-lg transition-300 min-h-[40px]">
							<NuxtImg class="h-4 w-4 flex-shrink-0" src="images/mail-icon.svg" alt="Email" />
							<span class="text-sm font-medium text-nowrap">{{ 'info@dark.uz' }}</span>
						</a>
						<a :href="`tel:${'+998 97 991-62-20'}`" class="flex items-center justify-center gap-2 p-2 hover:bg-white/30 rounded-lg transition-300 min-h-[40px]">
							<NuxtImg class="h-4 w-4 flex-shrink-0" src="images/phone-icon.svg" alt="Phone" />
							<span class="text-sm font-medium text-nowrap">+998 97 991-62-20</span>
						</a>
					</div>
				</div>
				<!-- App Download Links -->
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col gap-2.5">
						<div class="bg-dark-3 p-3 size-[130px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" alt="App Store" />
						</div>
						<div class="bg-dark-3 py-4 px-5 w-[130px] rounded-xl">
							<NuxtImg src="/images/app-store.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="bg-dark-3 backdrop-blur-[10px] p-3 size-[130px] rounded-2xl">
							<NuxtImg src="/images/qr-code.webp" class="w-full h-full" />
						</div>
						<div class="bg-dark-3 backdrop-blur-[10px] py-4 px-5 w-[130px] rounded-xl">
							<NuxtImg src="/images/google-play.svg" class="w-full h-full" alt="App Store" />
						</div>
					</div>
				</div>
			</div>
			<div class="bg-[#85858514] backdrop-blur-[10px] py-4 md:py-6 lg:py-7 px-4 md:px-6 lg:px-8 border-t border-white/10">
				<div class="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
					<div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-center md:text-left">
						<NuxtLinkLocale to="/static/privacy-policy" class="text-sm md:text-base !leading-140 transition-300 hover:text-blue"> {{ $t('privacy_policy') }} </NuxtLinkLocale>
						<NuxtLinkLocale to="/static/cookie-policy" class="text-sm md:text-base !leading-140 transition-300 hover:text-blue"> {{ $t('terms_conditions') }} </NuxtLinkLocale>
					</div>
					<p class="text-sm !leading-140 font-medium">{{ $t('developed_by') }}</p>
					<p class="text-sm md:text-base !leading-140">{{ $t('copyright', { year: new Date().getFullYear() }) }}</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
const { scrollToSection } = useNavigation()

const handleNavigation = (sectionId) => {
	scrollToSection(sectionId)
}
</script>
