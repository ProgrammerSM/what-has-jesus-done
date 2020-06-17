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
          <meta name="description" content={description} />
  
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />
  
          <link
            rel="mask-icon"
            href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />
  
          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.jpg`}
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
