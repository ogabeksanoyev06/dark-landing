export const useCounter = (target: number, duration: number = 2000) => {
	const count = ref(0)
	const isAnimating = ref(false)

	const animate = () => {
		if (isAnimating.value) return

		isAnimating.value = true
		const startTime = Date.now()
		const startValue = 0

		const updateCount = () => {
			const elapsed = Date.now() - startTime
			const progress = Math.min(elapsed / duration, 1)

			// Easing function for smooth animation
			const easeOutCubic = 1 - Math.pow(1 - progress, 3)

			count.value = Math.floor(startValue + (target - startValue) * easeOutCubic)

			if (progress < 1) {
				requestAnimationFrame(updateCount)
			} else {
				count.value = target
				isAnimating.value = false
			}
		}

		requestAnimationFrame(updateCount)
	}

	// Format number with spaces for thousands
	const formattedCount = computed(() => {
		return count.value.toLocaleString('en-US').replace(/,/g, ' ')
	})

	return {
		count: readonly(count),
		formattedCount: readonly(formattedCount),
		animate,
		isAnimating: readonly(isAnimating)
	}
}
