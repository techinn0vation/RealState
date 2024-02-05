import { useState } from 'react'

import {
  ContentSidebar,
  BlockSidebar,
  LogoBranding,
  WrapperSidebar,
  InnerBlockSidebar,
  BlockLinksSidebar,
  LinksSidebar,
  ControlHamburger,
  RowHamburger
} from './styles'

import Logo from 'assets/img/logo.webp'

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  const toggleHamburger = () => {
    setIsActive(!isActive)
  }

  return (
    <WrapperSidebar>
      <ContentSidebar>
        <LogoBranding src={Logo} alt='Logo' priority={true} />
        <BlockSidebar>
          <InnerBlockSidebar>
            <ControlHamburger onClick={toggleHamburger}>
              <RowHamburger active={isActive} />
              <RowHamburger active={isActive} />
              <RowHamburger active={isActive} />
            </ControlHamburger>

            <BlockLinksSidebar active={isActive}>
              <LinksSidebar href='#'>imóveis</LinksSidebar>
              <LinksSidebar href='#'>serviços</LinksSidebar>
              <LinksSidebar href='#'>sobre nós</LinksSidebar>
              <LinksSidebar href='#'>contato</LinksSidebar>
            </BlockLinksSidebar>
          </InnerBlockSidebar>
        </BlockSidebar>
      </ContentSidebar>
    </WrapperSidebar>
  )
}
