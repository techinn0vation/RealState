import { useRouter } from 'next/navigation'

import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BlockAgencia,
  ContentAgencia,
  InnerFlexAgencia,
  ViewAgencia,
  WrapperAgencia
} from './styles'

export default function Agencia() {
  const navigation = useRouter()

  // Função para redirecionar para o googleMaps
  return (
    <WrapperAgencia>
      <ContentAgencia>
        <Headline
          title='visite-nos'
          text='se preferir você também pode visitar nossa agência, será um prazer recebe-lo (a).'
        />
        <ViewAgencia>
          <BlockAgencia>
            <InnerFlexAgencia>
              <Headline
                title='agência 1'
                text='Av. Advogado Horácio Raccanello Filho, 6326 - Zona 7, Maringá - PR, 87020-025'
              />
              <Button
                onClick={() =>
                  navigation.push('https://maps.app.goo.gl/Jt1hVGsLPDRLGF6h7')
                }
                text='ir'
              />
            </InnerFlexAgencia>
          </BlockAgencia>
        </ViewAgencia>
      </ContentAgencia>
    </WrapperAgencia>
  )
}
