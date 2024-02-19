import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import Headline from 'components/Ui/Headline'

import {
  BlockFields,
  ButtonSocialField,
  ContentFooter,
  LogoFooter,
  WrapperFooter
} from './styles'

import Logo from 'assets/img/logo.webp'

export default function Footer() {
  return (
    <WrapperFooter>
      <ContentFooter>
        <LogoFooter src={Logo} alt='Logo' priority={true} />
        <Headline
          title='&copy;&thinsp;2024 - Grupo gestão empreendimentos. Todos os direitos reservados.'
          text=''
        />
        <BlockFields>
          <ButtonSocialField
            href='https://www.facebook.com/profile.php?id=100089661757737'
            target='_blank'
          >
            <FaFacebookF />
          </ButtonSocialField>
          <ButtonSocialField
            href='https://www.instagram.com/gestao_negocios_imobiliarios_?igsh=MWY3bG1yaHhveGJvcw=='
            target='_blank'
          >
            <FaInstagram />
          </ButtonSocialField>
        </BlockFields>
      </ContentFooter>
    </WrapperFooter>
  )
}
