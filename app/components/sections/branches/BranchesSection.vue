<template>
	<div class="relative">
		<Tabs class="container px-4 block md:hidden" v-model="activeTab" :tabs="tabs" @change="handleTabChange" />

		<div v-show="!isMobile || (isMobile && activeTab === 1)" class="max-md:container md:absolute top-16 md:top-16 bottom-0 left-2 right-2 md:left-32 z-[5] pointer-events-none">
			<div
				class="bg-dark-3 border-2 border-white/10 p-3 sm:px-5 sm:pt-5 max-w-[516px] h-auto md:h-[calc(100%-4rem)] no-scrollbar overflow-y-auto rounded-[32px] pointer-events-auto shadow-[0_305px_85px_0_rgba(0,0,0,0),0_195px_78px_0_rgba(0,0,0,0),0_110px_66px_0_rgba(0,0,0,0.01),0_49px_49px_0_rgba(0,0,0,0.02),0_12px_27px_0_rgba(0,0,0,0.02)] ]"
			>
				<div class="flex flex-col gap-3">
					<template v-if="isPending">
						<BranchCardLoading v-for="key in 3" :key="key" />
					</template>
					<template v-else>
						<BranchCard v-for="(branch, index) in branchesData" :key="index" :branch="branch" :is-active="activeBranchId === branch.id" @click="focusOnBranch" />
					</template>
				</div>
			</div>
		</div>

		<!-- Map -->
		<div v-show="!isMobile || (isMobile && activeTab === 0)" class="yandex-map-container relative container z-0 overflow-hidden max-md:rounded-[20px] rounded-[48px]">
			<div ref="mapContainer" class="map-container max-md:rounded-[20px] rounded-[48px]"></div>
		</div>
		<BranchModal v-model="branchModal" :branch="selectedBranch" />
	</div>
</template>

<script setup lang="ts">
import BranchCard from './BranchCard.vue'
import BranchCardLoading from './BranchCardLoading.vue'
import BranchModal from './BranchModal.vue'

const { t } = useI18n()

interface Props {
	center?: [number, number]
	zoom?: number
	width?: string
	height?: string
	apiKey?: string
}

const props = withDefaults(defineProps<Props>(), {
	center: () => [41.327107, 69.234937],
	zoom: 14,
	width: '100%',
	height: 'auto',
	apiKey: '05181cd4-e8a6-43c1-8365-8653993c01c3' // Replace with your actual API key
})
const isMobile = computed(() => useWindowSize().width.value < 768)

const branchesData = ref([
	{
		id: 1,
		name: 'Everest Xalqlar do‘stligi',
		image: 'https://api.everestlc.uz/media/branches/drujba.png',
		latitude: 41.313795,
		longitude: 69.241114,
		address: 'Toshkent, Shayxontohur, Furqat 33',
		region: 1,
		region_name: 'Toshkent',
		near_to_metro: true,
		length_from_metro: 500,
		metro_name: 'Xalqlar do‘stligi',
		telegram_channel: '@everestdrujba',
		phone: '+998788888008',
		secondary_phone: '+998951448070',
		has_math: true,
		has_cdi_mock: true,
		images: [
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_OOgGaGQ.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_o6S6GZp.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_6IBeKxK.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_09i8Syf.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_LjeD35P.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_JVLE7YY.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_XflPpqi.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_6MXqHQX.png'
			}
		]
	},
	{
		id: 2,
		name: 'Everest Xalqlar do‘stligi 2',
		image: 'https://api.everestlc.uz/media/branches/drujba_-2.jpg',
		latitude: 41.312756,
		longitude: 69.236233,
		address: 'Toshkent, Shayxontohur, Qoratosh 22',
		region: 1,
		region_name: 'Toshkent',
		near_to_metro: true,
		length_from_metro: 1200,
		metro_name: 'Xalqlar do‘stligi',
		telegram_channel: '@everestdrujbatwo',
		phone: '+998788888008',
		secondary_phone: '+998951448070',
		has_math: true,
		has_cdi_mock: true,
		images: [
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_8Tw6pT7.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_XEoAB0W.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_g1DQudm.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_sUdqByR.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_uJXqlqL.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image_1cy5v8O.png'
			},
			{
				image: 'https://api.everestlc.uz/media/branch_images/Image.png'
			}
		]
	},
	{
		id: 3,
		name: 'Everest Novza',
		image: 'https://api.everestlc.uz/media/branches/novza.jpg',
		latitude: 41.292026,
		longitude: 69.224454,
		address: 'Toshkent, Chilonzor, Muqimiy 22A',
		region: 1,
		region_name: 'Toshkent',
		near_to_metro: true,
		length_from_metro: 10,
		metro_name: 'Novza',
		telegram_channel: '@everestnovza',
		phone: '+998788888008',
		secondary_phone: '+998951445040',
		has_math: false,
		has_cdi_mock: false,
		images: []
	},
	{
		id: 4,
		name: 'Everest Alisher Navoiy',
		image: 'https://api.everestlc.uz/media/branches/navoiy-1.jpg',
		latitude: 41.321942,
		longitude: 69.248023,
		address: 'Toshkent, Shayxontohur, A. Navoiy 30B',
		region: 1,
		region_name: 'Toshkent',
		near_to_metro: true,
		length_from_metro: 700,
		metro_name: 'Alisher Navoiy',
		telegram_channel: '@everestnavoiy',
		phone: '+998788888008',
		secondary_phone: '+998951446070',
		has_math: true,
		has_cdi_mock: true,
		images: []
	}
])

const tabs = computed(() => [
	{ label: t('map_view'), value: 'tab1' },
	{ label: t('list_of_branches'), value: 'tab2' }
])
const handleTabChange = (index: number, tab: any) => {
	console.log('Tab changed:', index, tab)
}

const activeTab = ref(0)
const isPending = ref(false)
const branchModal = ref(false)
const selectedBranch = ref(null)
const showBranchModal = (branch: any) => {
	selectedBranch.value = branch
	branchModal.value = true
}
// const fetchBranches = async () => {
// 	try {
// 		isPending.value = true
// 		const response = await $axios.get('ielts/Branches/')
// 		branchesData.value = response.data
// 		isPending.value = false
// 	} catch (error) {
// 		console.error('Error fetching branches:', error)
// 		branchesData.value = null
// 		isPending.value = false
// 	}
// }

const mapContainer = ref<HTMLElement>()
let map: any = null
let ymaps: any = null
let markers: any[] = []
let activeMarker: any = null
const activeBranchId = ref<number | null>(null)

const createMarkerSVG = (color: string) => {
	return btoa(`
<svg width="46" height="59" viewBox="0 0 46 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse opacity="0.16" cx="22.9399" cy="56.0532" rx="8" ry="2" fill="none"/>
<mask id="path-2-inside-1_1427_899" fill="white">
<path d="M22.999 0C35.7015 0 45.999 10.1765 45.999 22.7295C45.9989 32.3145 39.9949 40.5122 31.501 43.8535L24.7109 55.0391C23.9321 56.3218 22.0698 56.3218 21.291 55.0391L14.501 43.8555C6.00529 40.515 0.000108342 32.3157 0 22.7295C0 10.1766 10.2967 0.00021597 22.999 0Z"/>
</mask>
<path d="M22.999 0C35.7015 0 45.999 10.1765 45.999 22.7295C45.9989 32.3145 39.9949 40.5122 31.501 43.8535L24.7109 55.0391C23.9321 56.3218 22.0698 56.3218 21.291 55.0391L14.501 43.8555C6.00529 40.515 0.000108342 32.3157 0 22.7295C0 10.1766 10.2967 0.00021597 22.999 0Z" fill="${color}"/>
<path d="M22.999 0L22.999 -2L22.999 -2L22.999 0ZM45.999 22.7295L47.999 22.7295V22.7295H45.999ZM31.501 43.8535L30.7688 41.9923L30.1413 42.2392L29.7913 42.8157L31.501 43.8535ZM24.7109 55.0391L26.4205 56.077L26.4206 56.0769L24.7109 55.0391ZM21.291 55.0391L19.5814 56.077L19.5814 56.077L21.291 55.0391ZM14.501 43.8555L16.2106 42.8175L15.8605 42.241L15.2328 41.9942L14.501 43.8555ZM0 22.7295L-2 22.7295L-2 22.7295L0 22.7295ZM22.999 0V2C34.6193 2 43.999 11.3033 43.999 22.7295H45.999H47.999C47.999 9.04968 36.7837 -2 22.999 -2V0ZM45.999 22.7295L43.999 22.7295C43.9989 31.4535 38.5347 38.9374 30.7688 41.9923L31.501 43.8535L32.2331 45.7147C41.455 42.087 47.9989 33.1754 47.999 22.7295L45.999 22.7295ZM31.501 43.8535L29.7913 42.8157L23.0013 54.0012L24.7109 55.0391L26.4206 56.0769L33.2106 44.8913L31.501 43.8535ZM24.7109 55.0391L23.0014 54.0011L23.0006 54.0011L21.291 55.0391L19.5814 56.077C21.139 58.6425 24.8629 58.6425 26.4205 56.077L24.7109 55.0391ZM21.291 55.0391L23.0006 54.0011L16.2106 42.8175L14.501 43.8555L12.7914 44.8934L19.5814 56.077L21.291 55.0391ZM14.501 43.8555L15.2328 41.9942C7.46543 38.9401 2.0001 31.4548 2 22.7295L0 22.7295L-2 22.7295C-1.99988 33.1767 4.54516 42.0899 13.7691 45.7168L14.501 43.8555ZM0 22.7295H2C2 11.3033 11.379 2.0002 22.9991 2L22.999 0L22.999 -2C9.21442 -1.99977 -2 9.04989 -2 22.7295H0Z" fill="url(#paint0_linear_1427_899)" fill-opacity="0.2" mask="url(#path-2-inside-1_1427_899)"/>
<path d="M22.7398 8.05957C30.8161 8.16594 36.771 14.2653 36.9837 21.6552C37.2085 29.4826 30.9968 36.0516 22.8061 36.0597C19.0509 35.9091 15.7794 34.6026 13.1101 31.9292C10.3344 29.1515 8.95755 25.7495 9.00973 21.8499C9.05991 18.1108 10.4428 14.8494 13.1061 12.188C15.8276 9.47051 19.1553 8.16594 22.7398 8.05957ZM25.5055 19.4976C25.5597 19.5197 25.5978 19.5378 25.638 19.5518C26.7037 19.9532 27.4242 20.7039 27.7695 21.7756C28.2311 23.2066 27.9942 24.5754 27.2456 25.8579C26.7138 26.7711 25.8869 27.3451 24.9355 27.7646C23.5848 28.3607 22.1578 28.5754 20.7007 28.5875C18.234 28.6096 15.7674 28.5935 13.3028 28.5955C13.2526 28.5955 13.1864 28.5654 13.1563 28.6196C13.1322 28.6658 13.1884 28.7059 13.2145 28.742C13.7242 29.4846 14.3043 30.169 14.9706 30.7772C16.6425 32.2965 18.5853 33.2799 20.8091 33.7014C22.6094 34.0446 24.3916 33.9623 26.1598 33.4846C26.2802 33.4525 26.2983 33.4164 26.2481 33.302C25.7062 32.0597 25.1663 30.8153 24.6325 29.5689C24.5181 29.3 24.3736 29.0451 24.3053 28.7541C24.2772 28.6316 24.3334 28.6176 24.4097 28.5935C24.9255 28.4269 25.4152 28.2041 25.8889 27.9452C26.0936 27.8349 26.0936 27.8348 26.1919 28.0416C26.1979 28.0556 26.204 28.0717 26.21 28.0857C26.5913 28.9909 26.9707 29.8961 27.352 30.8012C27.4483 31.028 27.5467 31.2528 27.6591 31.5117C27.7373 31.311 27.8016 31.1485 27.8658 30.9859C28.5823 29.1414 29.3068 27.299 30.0153 25.4505C30.4268 24.3747 31.1473 23.6321 32.2572 23.2869C32.6265 23.1725 33.0038 23.1264 33.3911 23.1685C33.4554 23.1765 33.4594 23.2066 33.4433 23.2548C33.4293 23.2949 33.4132 23.3351 33.3972 23.3732C32.2833 26.0606 31.1694 28.748 30.0575 31.4355C30.0374 31.4856 29.9952 31.5338 30.0213 31.596C34.5753 28.3426 36.504 21.6994 33.2607 16.1158C30.0314 10.5583 23.7293 9.34206 19.6309 10.7269C20.9997 10.7269 22.3525 10.7209 23.7052 10.7289C24.5181 10.7329 25.3149 10.8453 26.0755 11.1424C26.9145 11.4695 27.643 11.9472 28.1588 12.7058C28.5923 13.3441 28.775 14.0586 28.8031 14.8213C28.8713 16.6657 28.1006 18.0566 26.5351 19.02C26.214 19.2147 25.8668 19.3531 25.5055 19.4976ZM24.9355 25.0591C25.2426 24.7099 25.4333 24.3266 25.5376 23.9011C25.7163 23.1745 25.6701 22.4801 25.2265 21.8479C24.9355 21.4344 24.5221 21.1695 24.0745 20.9507C24.0023 20.9146 23.94 20.8805 23.9059 20.7942C23.5948 20.0496 23.2797 19.309 22.9666 18.5664C22.9044 18.4179 22.9285 18.3837 23.0971 18.3677C23.4543 18.3316 23.8056 18.2713 24.1528 18.175C24.6686 18.0325 25.1422 17.8057 25.5617 17.4705C26.1458 17.0009 26.3866 16.3627 26.4689 15.6421C26.6014 14.4881 26.0936 13.6231 25.0218 13.2116C24.508 13.0129 23.9661 12.9367 23.4182 12.9347C21.5778 12.9286 19.7373 12.9326 17.8969 12.9306C17.8005 12.9306 17.7704 12.9628 17.7564 13.0551C17.7202 13.3039 17.6761 13.5508 17.6319 13.7977C17.371 15.2809 17.1101 16.7641 16.8472 18.2453C16.8251 18.3657 16.8492 18.4018 16.9797 18.4018C17.5798 18.3958 18.1778 18.4058 18.778 18.3958C18.9606 18.3918 19.063 18.468 19.1312 18.6246C19.374 19.1886 19.6189 19.7505 19.8617 20.3145C19.932 20.4771 19.93 20.4771 19.7514 20.4771C18.7137 20.4771 17.6761 20.4811 16.6385 20.4731C16.494 20.4731 16.4478 20.5172 16.4237 20.6537C16.3274 21.2377 16.219 21.8218 16.1146 22.4038C15.8838 23.6863 15.657 24.9688 15.4202 26.2493C15.3921 26.3998 15.4222 26.438 15.5787 26.4359C17.355 26.4299 19.1312 26.436 20.9074 26.4319C21.6159 26.4299 22.3143 26.3456 22.9987 26.159C23.1131 26.1289 23.1332 26.0968 23.085 25.9884C22.4267 24.4771 21.7704 22.9618 21.1141 21.4485C20.1688 19.2628 19.2235 17.0772 18.2782 14.8915C18.1939 14.6968 18.1959 14.6888 18.4107 14.7049C19.5627 14.7992 20.4779 15.307 21.1422 16.2563C21.4593 16.7079 21.6279 17.2297 21.8407 17.7274C22.782 19.9432 23.7132 22.163 24.6485 24.3808C24.7408 24.6035 24.8352 24.8223 24.9355 25.0591ZM12.7247 27.9452C12.7769 27.7927 15.3479 13.1695 15.3479 13.039C11.2335 16.3346 9.71018 22.8052 12.7247 27.9452Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1427_899" x1="22.999" y1="0" x2="22.999" y2="56.0011" gradientUnits="userSpaceOnUse">
<stop offset="0.17354" stop-color="white"/>
<stop offset="0.66057" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

    `)
}

const resetAllMarkers = () => {
	markers.forEach((marker) => {
		marker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#020D17'))
	})
}

const focusOnBranch = (branch: any) => {
	if (isMobile.value) {
		showBranchModal(branch)
		return
	}
	if (activeBranchId.value === branch.id) {
		showBranchModal(branch)
		return
	}
	if (!map || !branch) return

	// Set active branch
	activeBranchId.value = branch.id

	// Find coordinates for the branch
	const lat = branch.latitude || branch.lat || branch.coordinates?.lat
	const lng = branch.longitude || branch.lng || branch.coordinates?.lng

	if (lat && lng) {
		// Reset all markers to blue
		resetAllMarkers()

		// Find the corresponding marker and make it red
		const targetMarker = markers.find((marker) => {
			const markerCoords = marker.geometry.getCoordinates()
			return Math.abs(markerCoords[0] - lat) < 0.0001 && Math.abs(markerCoords[1] - lng) < 0.0001
		})

		if (targetMarker) {
			targetMarker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#FE014D'))
			activeMarker = targetMarker
		}

		// Focus on the branch location
		map.setCenter([lat, lng], 16, {
			duration: 500
		})
	}
}

const initMap = () => {
	if (!window.ymaps) {
		console.error('Yandex Maps API not loaded')
		return
	}

	ymaps = window.ymaps
	ymaps.ready(() => {
		if (mapContainer.value) {
			map = new ymaps.Map(mapContainer.value, {
				center: props.center,
				zoom: props.zoom,
				controls: [],
				copyrights: false,
				suppressMapOpenBlock: true
			})

			// Add markers from API data
			if (branchesData.value && Array.isArray(branchesData.value)) {
				branchesData.value.forEach((branch: any, index: number) => {
					// Check for different possible coordinate field names
					const lat = branch.latitude || branch.lat || branch.coordinates?.lat
					const lng = branch.longitude || branch.lng || branch.coordinates?.lng

					if (lat && lng) {
						// Create custom marker based on Figma design
						const customMarker = new ymaps.Placemark(
							[lat, lng],
							{
								iconContent: `
                                <div style="
                                    position: absolute;
                                    top: -4px;
                                    left: 50%;
                                    transform: translateX(-50%) translateY(-100%);
                                    background: rgba(255, 255, 255, 0.9);
                                    backdrop-filter: blur(6px);
                                    padding: 8px 12px;
                                    border-radius: 100px;
                                    font-family: 'Inter', sans-serif;
                                    font-size: 13px;
                                    font-weight: 400;
                                    color: #1C2329;
                                    white-space: nowrap;
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                                    pointer-events: none;
                                ">
                                    <div style="
                                        line-height: 9px;
                                        height: 9px;
                                    ">
                                        ${branch.name || 'Everest Branch'}
                                    </div>
                                </div>
                            `
							},
							{
								iconLayout: 'default#imageWithContent',
								iconImageHref: 'data:image/svg+xml;base64,' + createMarkerSVG('#0154F8'),
								iconImageSize: [46, 56],
								iconImageOffset: [-23, -56],
								iconContentOffset: [0, 0],
								iconContentSize: [46, 56]
							}
						)

						// Add click event to marker
						customMarker.events.add('click', () => {
							if (isMobile.value) {
								showBranchModal(branch)
								return
							}
							if (activeBranchId.value === branch.id) {
								showBranchModal(branch)
								return
							}
							// Set active branch ID to make card active
							activeBranchId.value = branch.id

							// Reset all markers to blue
							resetAllMarkers()

							// Change clicked marker to red
							customMarker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#FE014D'))

							// Focus on the clicked marker
							map.setCenter([lat, lng], 16, {
								duration: 500
							})

							// Store active marker
							activeMarker = customMarker
						})

						// Store marker in array
						markers.push(customMarker)

						map.geoObjects.add(customMarker)
					} else {
						console.log(`Branch ${index} missing coordinates:`, { lat, lng })
					}
				})
			} else {
				console.log('No valid branches data found')
				// Add a fallback marker to test if map is working
				const fallbackMarker = new ymaps.Placemark(
					props.center,
					{
						balloonContent: 'Fallback marker - API data not available'
					},
					{
						preset: 'islands#blueDotIcon'
					}
				)
				map.geoObjects.add(fallbackMarker)
			}
		}
	})
}

const loadYandexMapsAPI = () => {
	if (window.ymaps) {
		initMap()
		return
	}

	const script = document.createElement('script')
	script.src = `https://api-maps.yandex.ru/2.1/?apikey=${props.apiKey}&lang=en_US`
	script.async = true
	script.onload = () => {
		initMap()
	}
	script.onerror = () => {
		console.error('Failed to load Yandex Maps API')
	}
	document.head.appendChild(script)
}

onMounted(async () => {
	// await fetchBranches()
	loadYandexMapsAPI()
})

onUnmounted(() => {
	if (map) {
		map.destroy()
	}
})

declare global {
	interface Window {
		ymaps: any
	}
}
</script>

<style scoped>
/* Map Container */
.yandex-map-container {
	width: v-bind(width);
	aspect-ratio: 1440 / 650;
	height: auto;
	max-height: 650px;
}

@media screen and (max-width: 768px) {
	.yandex-map-container {
		height: calc(100vh - 200px);
	}
}

.map-container {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.no-scrollbar::-webkit-scrollbar {
	display: none;
}

.no-scrollbar {
	-ms-overflow-style: none; /* IE, Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
