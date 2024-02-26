import { useState, useEffect } from 'react'

import Title from 'components/Ui/CustomTitle'
import Headline from 'components/Ui/Headline'

import {
  BlockServiços,
  BodyCardServiços,
  ContentServiços,
  FrameCardServiços,
  HeaderCardServiços,
  ViewServiços,
  WrapperServiços
} from './styles'

import Assessoria from 'assets/img/Assessoria.webp'
import Gestao from 'assets/img/Gestao.webp'
import Padrao from 'assets/img/Padrao.webp'

export default function Serviços() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('serviços')

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
    <WrapperServiços>
      <ContentServiços className={isVisible ? 'visible' : ''} id='serviços'>
        <Title title='serviços' />

        <ViewServiços>
          <BlockServiços>
            <HeaderCardServiços>
              <FrameCardServiços
                src={Assessoria}
                alt='fascino'
                priority={true}
              />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='gestão imobiliária'
                text='realizamos o acompanhamento desde a busca pelo seu imóvel até o momento de pegar a chave.'
              />
            </BodyCardServiços>
          </BlockServiços>
          <BlockServiços>
            <HeaderCardServiços>
              <FrameCardServiços src={Gestao} alt='fascino' priority={true} />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='assessoria'
                text='facilitamos a aquisição, agilizando partes burocráticas e demoradas.'
              />
            </BodyCardServiços>
          </BlockServiços>
          <BlockServiços>
            <HeaderCardServiços>
              <FrameCardServiços src={Padrao} alt='fascino' priority={true} />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='alto padrão'
                text='especializados em propriedades de alto e médio padrão, conectamos você às melhores oportunidades.'
              />
            </BodyCardServiços>
          </BlockServiços>
        </ViewServiços>
      </ContentServiços>
    </WrapperServiços>
  )
}
