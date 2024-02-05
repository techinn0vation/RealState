'use client'

import React, { ReactNode } from 'react'

import Footer from 'components/Footer'
import ScrollPage from 'components/ScrollPage'
import Sidebar from 'components/Sidebar'
import { ThemeProvider } from 'styled-components'

import { Content } from './styles'

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
          <body className={mainFont.className}>
            <ScrollPage />
            <Content>
              <Sidebar />
              {children}
              <Footer />
            </Content>
          </body>
        </html>
        <GlobalStyle />
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
