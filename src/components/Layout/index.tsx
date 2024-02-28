'use client'

import React, { ReactNode } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { ThemeProvider } from 'styled-components'

import { Container } from './styles'

import StyledComponentsRegistry from 'app/registry'
import { mainFont } from 'styles/FontConfig'
import { GlobalStyle } from 'styles/global'
import { theme } from 'themes/themes'
interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <html lang='pt-br'>
          <head>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16473891670"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16473891670'); </script>
              `
              }}
            />
          </head>
          <body className={mainFont.className}>
            <Container>
              <Header />
              {children}
              <Footer />
            </Container>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
