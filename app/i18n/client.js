/**
 * @Author kevin
 * @Description
 * @path src/app/i18n
 * @Date 2024/11/3
 */

'use client'

import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next'
import { useCookies } from 'react-cookie'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages, cookieName } from './settings'

const runsOnServerSide = typeof window === 'undefined'

//
i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
	.init({
		...getOptions(),
		locale: undefined, // let detect the language on client side
		detection: {
			order: ['path', 'htmlTag', 'cookie', 'navigator', 'ip'],
		},
		preload: runsOnServerSide ? languages : []
	})

export function useTranslation(locale, ns, options) {
	const [cookies, setCookie] = useCookies([cookieName])
	const ret = useTranslationOrg(ns, options)
	const { i18n } = ret
	if (runsOnServerSide && locale && i18n.resolvedLanguage !== locale) {
		i18n.changeLanguage(locale)
	} else {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (activeLng === i18n.resolvedLanguage) return
			setActiveLng(i18n.resolvedLanguage)
		}, [activeLng, i18n.resolvedLanguage])
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (!locale || i18n.resolvedLanguage === locale) return
			i18n.changeLanguage(locale)
		}, [locale, i18n])
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useEffect(() => {
			if (cookies.i18next === locale) return
			setCookie(cookieName, locale, { path: '/' })
		}, [locale, cookies.i18next])
	}
	return ret
}
	