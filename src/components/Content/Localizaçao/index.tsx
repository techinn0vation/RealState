import { useState, useEffect } from 'react'
import { IoMapSharp } from 'react-icons/io5'

import Title from 'components/Ui/CustomTitle'
import Headline from 'components/Ui/Headline'

import {
  BlockCardLocalizaçao,
  BlockFrameLocalizaçao,
  ButtonLocalizaçao,
  ContentLocalizaçao,
  FrameLocalizaçao,
  ViewLocalizaçao,
  WrapperLocalizaçao
} from './styles'

import Local from 'assets/img/Maps.webp'

export default function Localizaçao() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('local')

    if (element) {
      const elementPosition = element.offsetTop

      if (scrollPosition > elementPosition - window.innerHeight / 1) {
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
    <WrapperLocalizaçao>
      <ContentLocalizaçao className={isVisible ? 'visible' : ''} id='local'>
        <Title title='visite-nos' />
        <ViewLocalizaçao>
          <BlockCardLocalizaçao>
            <IoMapSharp />
            <Headline
              title='ficaremos felizes em recebe-lo (a).'
              text='Av. Advogado Horácio Raccanello Filho, 6326 - Zona 7, Maringá - PR, 87020-025'
            />
            <ButtonLocalizaçao href='https://maps.app.goo.gl/Jt1hVGsLPDRLGF6h7'>
              visitar
            </ButtonLocalizaçao>
          </BlockCardLocalizaçao>
          <BlockFrameLocalizaçao>
            <FrameLocalizaçao src={Local} alt='fascino' priority={true} />
          </BlockFrameLocalizaçao>
        </ViewLocalizaçao>
      </ContentLocalizaçao>
    </WrapperLocalizaçao>
  )
}
