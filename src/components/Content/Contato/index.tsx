import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BlockFormulario,
  BlockMensagem,
  ContentContato,
  InnerBlockFields,
  InnerField,
  ViewContato,
  WrapperContato
} from './styles'

import { mainFont } from 'styles/FontConfig'

export default function Contato() {
  return (
    <WrapperContato>
      <ContentContato>
        <Headline title='contato' text='' />
        <ViewContato>
          <BlockFormulario>
            <InnerBlockFields>
              <InnerField type='text' placeholder='Nome' />
              <InnerField type='text' placeholder='E-mail' />
              <InnerField type='tel' placeholder='Telefone' />
            </InnerBlockFields>
            <InnerBlockFields>
              <BlockMensagem
                placeholder='Digite sua mensagem'
                className={mainFont.className}
              />
            </InnerBlockFields>
            <Button text='enviar' onClick={() => {}} />
          </BlockFormulario>
        </ViewContato>
      </ContentContato>
    </WrapperContato>
  )
}
