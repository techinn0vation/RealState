'use client'

import React, { useState, useEffect } from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import { Headline } from 'components/Ui/Headline'

import {
  BlockFooter,
  ContentFooter,
  ContentSocialFields,
  InnerSocialField,
  LinkSocialField,
  WrapperFooter
} from './styles'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('footer')

    if (element) {
      const elementPosition = element.offsetTop

      if (scrollPosition > elementPosition - window.innerHeight / 2) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <WrapperFooter className={isVisible ? 'visible' : ''} id='footer'>
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
            {/* <LinkSocialField href='#'>
              <InnerSocialField>
                <FaTwitter />
              </InnerSocialField>
            </LinkSocialField> */}
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
