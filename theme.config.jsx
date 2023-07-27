import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config = {
  logo: "Collabor8 WithNotes",
  primaryHue: 180,
  useNextSeoProps() {
    return {
      titleTemplate: 'Collabor8 WithNotes'
    }
  },
  project: {
    link: 'https://github.com/',
  },
  chat: {
    link: 'https://discord.com',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: false,
    toggleButton: true,
  },
  toc: {
    title: "🔗 Table Of Content"
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
    { locale: 'de', text: 'Deutsch' },
    { locale: 'ar', text: 'العربية', direction: 'rtl' }
  ],
  gitTimestamp: (
    <>
      <h1>demo</h1>
    </>
  ),
  docsRepositoryBase: 'https://github.com/scoheart',
  footer: {
    text: (
      <span>
        📦 Collabor8 WithNotes July 24 {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    ),
  },
  faviconGlyph: "👻"
}

export default config
