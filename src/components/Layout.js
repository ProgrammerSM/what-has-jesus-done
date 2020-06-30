import React from 'react'

import { ThemeProvider } from 'emotion-theming'
import theme from '../assets/scripts/theme'
import styled from '@emotion/styled'
import { breakpoints } from '../assets/scripts/media-query'
import '../assets/styles/normalize.scss'
import '../assets/styles/typography.scss'

import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Navbar from './Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const Wrapper = styled.div`
  background-color: ${theme.colors.light};
  color: ${theme.colors.info};

  h1 {
    color: ${theme.colors.primary};
  }
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Helmet>
          <html lang="en" />
          
          <title>{title}</title>
          
          <meta
            name="description"
            content={description}
          />
          
          <meta
            name="msapplication-TileColor"
            content={`${theme.colors.light}`}
          />

          <meta
            name="theme-color"
            content={`${theme.colors.light}`}
          />
  
          <meta
            property="og:type"
            content="business.business"
          />
          
          <meta
            property="og:title"
            content={title}
          />
          
          <meta
            property="og:url"
            content="/"
          />
          
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
          />

          <link 
            rel="apple-touch-icon"
            sizes="57x57"
            href={`${withPrefix('/')}img/apple-icon-57x57.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={`${withPrefix('/')}img/apple-icon-60x60.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={`${withPrefix('/')}img/apple-icon-72x72.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${withPrefix('/')}img/apple-icon-76x76.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={`${withPrefix('/')}img/apple-icon-114x114.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={`${withPrefix('/')}img/apple-icon-120x120.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={`${withPrefix('/')}img/apple-icon-144x144.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={`${withPrefix('/')}img/apple-icon-152x152.png`}
          />
          
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-icon-180x180.png`}
          />
          
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={`${withPrefix('/')}img/android-icon-192x192.png`}
          />
          
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
          />
          
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={`${withPrefix('/')}img/favicon-96x96.png`}
          />
          
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
          />
          
          <link
            rel="manifest"
            href={`${withPrefix('/')}img/manifest.json`}
          />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default TemplateWrapper
