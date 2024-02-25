import { useState, useEffect } from 'react'

import Text from 'components/Ui/CustomText'
import Title from 'components/Ui/CustomTitle'

import {
  BlockCardExclusivo,
  BodyCardExclusivo,
  ContentExclusivo,
  FrameCardExclusivo,
  HeaderCardExclusivo,
  ViewExclusivo,
  WrapperExclusivo
} from './styles'

import Elev from 'assets/img/Elevator.webp'
import Energy from 'assets/img/Energy.webp'
import Garage from 'assets/img/Garage.webp'
import Hotel from 'assets/img/Hotel.webp'
import Room from 'assets/img/Room.webp'
import Wide from 'assets/img/Wide.webp'

export default function Exclusivo() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('exclusivo')

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
    <WrapperExclusivo>
      <ContentExclusivo className={isVisible ? 'visible' : ''} id='exclusivo'>
        <Title title='exclusivo' />

        <ViewExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Room} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='3 suítes' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Wide} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='137m² e 164m² privativos' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Garage} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='3 vagas de garagem' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Hotel} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='2 apart. Por andar' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Elev} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='elevador para delivery' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
          <BlockCardExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Energy} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Text text='gerador de energia' />
            </BodyCardExclusivo>
          </BlockCardExclusivo>
        </ViewExclusivo>
      </ContentExclusivo>
    </WrapperExclusivo>
  )
}
