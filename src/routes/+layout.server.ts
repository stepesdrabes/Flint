import type {LayoutServerLoad} from './$types'
import {locales, loadTranslations, translations, defaultLocale} from "$lib/flint/i18n"

export const load: LayoutServerLoad = async ({cookies, url, request}) => {
    const {pathname} = url
    const headerCookies = request.headers.get('cookie')
    let theme: string | undefined

    if (headerCookies) headerCookies.split(';').forEach((cookie: string) => {
        cookie = cookie.replace(";", "")
        if (cookie.indexOf('theme=') !== -1) theme = cookie.substring(6, cookie.length).replace("=", "")
    })

    if (theme !== 'light-theme' && theme !== 'dark-theme') theme = 'dark-theme'
    let locale = (cookies.get('lang') || '').toLowerCase()
    if (!locale) locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=[-_,;])/)}`.toLowerCase()
    const supportedLocales = locales.get().map((l) => l.toLowerCase())

    if (!supportedLocales.includes(locale)) locale = defaultLocale
    await loadTranslations(locale, pathname)

    return {
        theme: theme,
        i18n: {locale, route: pathname},
        translations: translations.get()
    }
}