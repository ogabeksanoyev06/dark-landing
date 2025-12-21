export const useNavigation = () => {
	const route = useRoute()
	const router = useRouter()

	const localePath = useLocalePath()

	const scrollToSection = (sectionId: string) => {
		if (route.path !== localePath('/')) {
			router.push(`/#${sectionId}`)
			return
		}

		const element = document.getElementById(sectionId)
		if (element) {
			const headerHeight = 80
			const elementPosition = element.offsetTop - headerHeight

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

	return {
		scrollToSection,
		scrollToTop
	}
}
