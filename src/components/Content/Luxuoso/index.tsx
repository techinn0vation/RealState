import { useState, useEffect } from 'react'

import Title from 'components/Ui/CustomTitle'

import {
  BlockHidden,
  ContentGridImovel,
  FrameGrid,
  ViewGrid,
  WrapperGridImovel
} from './styles'

import FascinoV1 from 'assets/img/Fascino_V1.webp'
import FascinoV2 from 'assets/img/Fascino_V2.webp'
import FascinoV3 from 'assets/img/Fascino_V3.webp'
import FascinoV4 from 'assets/img/Fascino_V4.webp'
import Button from 'components/Ui/Button'
import ButtonZap from 'components/Ui/ButtonZap'

export default function Luxuoso() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('luxuoso')

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
    <WrapperGridImovel>
      <ContentGridImovel className={isVisible ? 'visible' : ''} id='luxuoso'>
        <ButtonZap text='Saiba mais' link='https://wa.link/v7gkh1'/>
        <Title title='luxuoso' />

        <ViewGrid>
          <FrameGrid src={FascinoV1} alt='fascino' priority={true} />
          <BlockHidden />
          <FrameGrid src={FascinoV2} alt='fascino' priority={true} />
          <BlockHidden />
          <FrameGrid src={FascinoV4} alt='fascino' priority={true} />
          <FrameGrid src={FascinoV3} alt='fascino' priority={true} />
        </ViewGrid>
      </ContentGridImovel>
    </WrapperGridImovel>
  )
}
