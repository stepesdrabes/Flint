import i18n from 'sveltekit-i18n'
import type {Config} from 'sveltekit-i18n'
import lang from './lang.json'

export const defaultLocale = 'en'

interface Params {
}

const config: Config<Params> = ({
    translations: {
        en: {lang}
    },
    loaders: [
        // en
        {
            locale: 'en',
            key: 'common',
            loader: async () => (
                await import('../../texts/en/common.json')
            ).default,
        }
    ],
})

export const {
    t,
    loading,
    locales,
    locale,
    translations,
    loadTranslations,
    addTranslations,
    setLocale,
    setRoute
} = new i18n(config)

loading.subscribe(($loading) => $loading && console.log('Loading translations...'))