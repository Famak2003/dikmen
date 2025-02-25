"use client"

import { useLocale, useTranslations  } from 'next-intl';

type II18N = { [key: string]: string } | string

export default function I18N({children}: {children: II18N}) {

    const locale = useLocale()
    const t = useTranslations()

    if(typeof children === 'string') {
      return t(children)
    }

    return children[locale]
    // return i18n.language == 'en' ? children.en : children.tr
}