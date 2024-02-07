import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

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
  return (
    <WrapperContato>
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
              <Button text='enviar' onClick={() => {}} />
            </InnerContato>
          </BlockContato>
        </ViewContato>
      </ContentContato>
    </WrapperContato>
  )
}
