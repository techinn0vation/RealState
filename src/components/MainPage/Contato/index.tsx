import React, { useState, useEffect } from 'react'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockContato,
  BlockMessage,
  ContentContato,
  InnerContato,
  InnerInput,
  ViewContato,
  WrapperContato
} from './styles'

export default function Contato() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const element = document.getElementById('form')

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
    <WrapperContato className={isVisible ? 'visible' : ''} id='form'>
      <ContentContato>
        <Headline
          title='entre em contato conosco'
          text='deixe-nos saber como podemos te ajudar.'
        />
        <ViewContato>
          <BlockContato>
            <InnerContato>
              <InnerInput placeholder='Nome completo' />
              <InnerInput placeholder='E-mail de contato' />
              <InnerInput placeholder='Número de telefone' />

              <BlockMessage placeholder='Escreva sua mensagem' />
              <Button text='enviar' icon='' />
            </InnerContato>
          </BlockContato>
        </ViewContato>
      </ContentContato>
    </WrapperContato>
  )
}
