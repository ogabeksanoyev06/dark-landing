<template>
	<Modal v-model="isOpen" :disable-outer-close="false">
		<div class="relative flex flex-col gap-6 z-10 w-full overflow-hidden px-6 py-6">
			<div class="header flex flex-col items-center gap-4 text-center">
				<NuxtImg src="/images/form-modal-dark-logo.svg" alt="Dark Logo" class="size-20 mx-auto object-contain" />
				<h3 class="text-xl font-bold">Hamkorlik uchun ma’lumotlaringizni qoldiring, tez orada bog’lanamiz.</h3>
			</div>
			<button type="button" class="absolute top-4 right-4 p-2 rounded-full bg-[#2A2A2A] transition-300" @click="isOpen = false" aria-label="Close modal">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M6 6L18 18M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</button>
			<form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2 w-full">
						<label class="text-base leading-130">Ism-sharifingiz</label>
						<input
							v-model="formData.name"
							type="text"
							placeholder="Ismingizni kiriting"
							class="text-base w-full h-11 flex items-center bg-[#2A2A2A] border border-transparent rounded-2xl px-3 placeholder-[#676767] placeholder:text-base outline-none focus:outline-none focus:border-dark focus:bg-black/50 transition-300"
							required
						/>
					</div>
					<div class="flex flex-col gap-2 w-full">
						<label class="text-base leading-130">Telefon raqamingiz</label>
						<div class="relative">
							<div class="flex items-center gap-2 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path
										d="M3 12H21M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M12 21C4.75561 13.08 8.98151 5.7 12 3M12 21C19.2444 13.08 15.0185 5.7 12 3"
										stroke="#676767"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<span class="text-base leading-130 mr-2">+998</span>
							</div>
							<input
								v-model="formData.phone"
								type="tel"
								class="text-base w-full h-11 flex items-center bg-[#2A2A2A] border border-transparent rounded-2xl pl-[84px] px-3 placeholder-[#676767] placeholder:text-base outline-none focus:outline-none focus:border-dark focus:bg-black/50 transition-300"
								required
								@input="handlePhoneInput"
							/>
						</div>
					</div>
					<div class="flex flex-col gap-2 w-full">
						<label class="text-base leading-130">E-mail manzilingiz</label>
						<input
							v-model="formData.email"
							type="email"
							placeholder="E-mail manzilingizni kiriting"
							class="text-base w-full h-11 flex items-center bg-[#2A2A2A] border border-transparent rounded-2xl px-3 placeholder-[#676767] placeholder:text-base outline-none focus:outline-none focus:border-dark focus:bg-black/50 transition-300"
							required
						/>
					</div>
				</div>
				<button
					type="submit"
					class="flex items-center justify-center gap-2 bg-orange rounded-full h-12 border-2 border-dark w-full px-4 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
					:disabled="!isFormValid"
				>
					<span class="text-white text-sm font-semibold leading-140 font-adero-trial">Yuborish</span>
					<NuxtImg src="/images/arrow-right.svg" class="size-6 aspect-square" />
				</button>
			</form>
			<NuxtImg src="/images/form-modal-bg.svg" alt="overlay" class="absolute left-0 top-0 right-0 bottom-0 min-w-[500px] object-cover h-full z-[-1]" />
		</div>
	</Modal>
</template>

<script setup>
import Modal from '~/components/Modal.vue'

const isOpen = defineModel('modelValue', { required: true })

const formData = ref({
	name: '',
	email: '',
	phone: ''
})

const { showToast } = useCustomToast()

const handlePhoneInput = (e) => {
	let value = e.target.value.replace(/\D/g, '')
	if (value.length > 9) {
		value = value.slice(0, 9)
	}
	formData.value.phone = value
}
const formattedPhone = computed(() => {
	return formData.value.phone ? `+998${formData.value.phone}` : ''
})

const isFormValid = computed(() => {
	return formData.value.name.trim().length > 2 && /^\S+@\S+\.\S+$/.test(formData.value.email) && formData.value.phone.length === 9
})
const handleSubmit = async () => {
	if (!isFormValid.value) {
		showToast('Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring', 'error')
		return
	}
	try {
		const payload = {
			name: formData.value.name.trim(),
			email: formData.value.email.trim(),
			phone: formattedPhone.value
		}
		console.log('Submitting:', payload)

		formData.value = {
			name: '',
			email: '',
			phone: ''
		}
		isOpen.value = false
		showToast('Ariza muvaffaqiyatli yuborildi', 'success')
	} catch (error) {
		console.error(error)
		showToast(error?.data?.message || "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.", 'error')
	}
}
</script>
