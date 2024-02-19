import { ContentHeader, LogoBranding, WrapperHeader } from './styles'

import Logo from 'assets/img/logo.webp'

export default function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <LogoBranding src={Logo} alt='logo' priority={true} />
      </ContentHeader>
    </WrapperHeader>
  )
}
