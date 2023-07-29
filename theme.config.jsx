import React from 'react'

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
  toc: {
    title: "🔗 Table Of Content"
  },
  docsRepositoryBase: 'https://github.com/',
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
