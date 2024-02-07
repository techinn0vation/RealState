import { ContentHeader, LogoBranding, WrapperHeader } from './styles'

import Logo from 'assets/img/Logo.webp'

export default function Header() {
  return (
    <WrapperHeader>
      <ContentHeader>
        <LogoBranding
          src={Logo}
          alt='grupo gestão imobiliária'
          priority={true}
        />
      </ContentHeader>
    </WrapperHeader>
  )
}
