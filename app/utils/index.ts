export function formatMoneyDecimal(number: any, fix = 0) {
	const option = {
		maximumFractionDigits: fix,
		minimumFractionDigits: fix
	}

	const formatted = number ? new Intl.NumberFormat('ru-RU', option).format(number) : '0'

	return `${formatted} UZS`
}

export function formatPhoneNumber(phone: string): string {
	return phone
		.trim()
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
}
