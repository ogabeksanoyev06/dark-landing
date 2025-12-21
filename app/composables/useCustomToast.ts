export const useCustomToast = () => {
	const showToast = (title: string, type: 'success' | 'error' | 'warning' | 'info') => {
		const toast = document.createElement('div')
		toast.className = `fixed top-4 right-4 z-[999] px-6 py-4 rounded-lg shadow-lg text-white font-medium max-w-sm transition-all duration-300 transform translate-x-full`

		switch (type) {
			case 'success':
				toast.style.backgroundColor = '#12C09E'
				break
			case 'error':
				toast.style.backgroundColor = '#EF4444'
				break
			case 'warning':
				toast.style.backgroundColor = '#F59E0B'
				break
			case 'info':
				toast.style.backgroundColor = '#3B82F6'
				break
		}

		toast.textContent = title
		document.body.appendChild(toast)

		setTimeout(() => {
			toast.style.transform = 'translateX(0)'
		}, 100)

		setTimeout(() => {
			toast.style.transform = 'translateX(full)'
			setTimeout(() => {
				if (document.body.contains(toast)) {
					document.body.removeChild(toast)
				}
			}, 300)
		}, 4000)
	}

	return { showToast }
}
