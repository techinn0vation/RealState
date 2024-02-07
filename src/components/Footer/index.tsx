'use client'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import Headline from 'components/Ui/Headline'

import {
  BlockFooter,
  ContentFooter,
  ContentSocialFields,
  InnerSocialField,
  LinkSocialField,
  WrapperFooter
} from './styles'

export default function Footer() {
  return (
    <WrapperFooter>
      <ContentFooter>
        <BlockFooter>
          <Headline
            title='assessoria e gestão imobiliária'
            text='transformando sonhos em moradias com execelêcia e dedicação.'
          />
        </BlockFooter>
        <BlockFooter>
          <ContentSocialFields>
            <LinkSocialField
              href='https://www.facebook.com/profile.php?id=100089661757737'
              target='_blank'
            >
              <InnerSocialField>
                <FaFacebookF />
              </InnerSocialField>
            </LinkSocialField>
            <LinkSocialField
              href='https://www.instagram.com/gestao_negocios_imobiliarios_?igsh=MWY3bG1yaHhveGJvcw=='
              target='_blank'
            >
              <InnerSocialField>
                <FaInstagram />
              </InnerSocialField>
            </LinkSocialField>
          </ContentSocialFields>
        </BlockFooter>
        <BlockFooter>
          <Headline
            title=''
            text='&copy; Grupo gestão empreendimentos. Todos os direitos reservados.'
          />
        </BlockFooter>
      </ContentFooter>
    </WrapperFooter>
  )
}
