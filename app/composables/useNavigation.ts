export const useNavigation = () => {
	const route = useRoute()
	const router = useRouter()
	const localePath = useLocalePath()

	const headerHeight = ref(0)

	const measureHeaderHeight = () => {
		nextTick(() => {
			const headerEl = document.querySelector('header')
			if (headerEl) {
				headerHeight.value = headerEl.offsetHeight
			}
		})
	}

	const scrollToSection = (sectionId: string) => {
		if (route.path !== localePath('/')) {
			router.push({ path: localePath('/'), hash: sectionId })
			return
		}

		const element = document.getElementById(sectionId)
		if (element) {
			const elementPosition = element.offsetTop - headerHeight.value

			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			})
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	onMounted(() => {
		measureHeaderHeight()
		window.addEventListener('resize', measureHeaderHeight)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', measureHeaderHeight)
	})

	return {
		headerHeight,
		scrollToSection,
		scrollToTop
	}
}
