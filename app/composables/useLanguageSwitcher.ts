import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
	const { locale, setLocale } = useI18n()
	const cookieLocale = useCookie('i18n_redirected')

	const languagesList = [
		{
			name: "O'zbekcha",
			short: 'Oʻz',
			code: 'uz',
			flag: '/images/flags/uz.svg'
		},
		{
			name: 'English',
			short: 'En',
			code: 'en',
			flag: '/images/flags/en.svg'
		},
		{
			name: 'Русский',
			short: 'Ru',
			code: 'ru',
			flag: '/images/flags/ru.svg'
		},
		{
			name: '中文',
			short: 'Zh',
			code: 'zh',
			flag: '/images/flags/zh.svg'
		}
	]

	const currentLanguage = computed(() => languagesList.find((lang) => lang.code === locale.value))

	function changeLocale(_locale) {
		cookieLocale.value = _locale
		setLocale(_locale)
	}

	return { currentLanguage, languagesList, changeLocale }
}
