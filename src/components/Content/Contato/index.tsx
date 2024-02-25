import { useState, useEffect } from 'react'

import Button from 'components/Ui/Button'
import Title from 'components/Ui/CustomTitle'

import {
  BlockFields,
  BlockFormulario,
  BlockMensagem,
  ContentContato,
  InnerField,
  ViewContato,
  WrapperContato
} from './styles'

import { mainFont } from 'styles/FontConfig'

export default function Contato() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('contato')

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
    <WrapperContato>
      <ContentContato className={isVisible ? 'visible' : ''} id='contato'>
        <Title title='contato' />

        <ViewContato>
          <BlockFormulario>
            <BlockFields>
              <InnerField placeholder='Nome' type='text' />
              <InnerField placeholder='E-mail' type='text' />
              <InnerField placeholder='Tel' type='tel' />
            </BlockFields>
            <BlockMensagem
              className={mainFont.className}
              placeholder='Digite sua mensagem'
            />

            <Button text='enviar' onClick={() => {}} />
          </BlockFormulario>
        </ViewContato>
      </ContentContato>
    </WrapperContato>
  )
}
