import React, { ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}
import { Layout } from 'components/Layout'

export default function RootLayout({ children }: RootLayoutProps) {
  return <Layout>{children}</Layout>
}
