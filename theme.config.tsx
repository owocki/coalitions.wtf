import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Coalitions.wtf</span>,
  project: {
    link: 'https://github.com/owocki/coalitions.wtf/',
  },
  docsRepositoryBase: 'https://github.com/owocki/coalitions.wtf/',
  footer: {
    text: 'coalitions.wtf',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – coalitions.wtf'
    }
  }
}

export default config
