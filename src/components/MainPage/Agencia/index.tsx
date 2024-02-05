import { IoSend } from 'react-icons/io5'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockAgencia,
  ContentAgencia,
  InnerFlexAgencia,
  ViewAgencia,
  WrapperAgencia
} from './styles'

export default function Agencia() {
  // Função para redirecionar para o googleMaps
  return (
    <WrapperAgencia>
      <ContentAgencia>
        <Headline
          title='visite-nos'
          text='se preferir você também pode visitar uma de nossas agências, será um prazer recebe-lo (a).'
        />
        <ViewAgencia>
          <BlockAgencia>
            <InnerFlexAgencia>
              <Headline
                title='agência 1'
                text='rua imaginaria 123, bairro boaVista, apartamento 456, CEP: 12345-678, Paraná, cidade Maré alta.'
              />
              {/* Botão de redirecion...D */}
              <Button text='' icon={<IoSend />} />
            </InnerFlexAgencia>
            <InnerFlexAgencia>
              <Headline
                title='agência 2'
                text='rua imaginaria 123, bairro boaVista, apartamento 456, CEP: 12345-678, Paraná, cidade Maré alta.'
              />
              <Button text='' icon={<IoSend />} />
            </InnerFlexAgencia>
            <InnerFlexAgencia>
              <Headline
                title='agência 3'
                text='rua imaginaria 123, bairro boaVista, apartamento 456, CEP: 12345-678, Paraná, cidade Maré alta.'
              />
              <Button text='' icon={<IoSend />} />
            </InnerFlexAgencia>
          </BlockAgencia>
        </ViewAgencia>
      </ContentAgencia>
    </WrapperAgencia>
  )
}
