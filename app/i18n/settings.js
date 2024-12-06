/**
 * @Author kevin
 * @Description
 * @path src/app/i18n
 * @Date 2024/11/3
 */

export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh', 'ja', 'fr', 'es', 'pt', 'ms']
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export function getOptions (lng = fallbackLng, ns = defaultNS) {
	return {
		debug: false,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns
	}
}