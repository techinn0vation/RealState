import Headline from 'components/Ui/Headline'

import {
  BlockCardServiços,
  BodyCardServiços,
  ContentServiços,
  FrameServiços,
  HeaderCardServiços,
  ViewGridServiços,
  WrapperServiços
} from './styles'

import Assessoria from 'assets/img/Assessoria.webp'
import Gestao from 'assets/img/Gestao.webp'
import Padrao from 'assets/img/Padrao.webp'

export default function Serviços() {
  return (
    <WrapperServiços>
      <ContentServiços>
        <Headline title='serviços' text='' />

        <ViewGridServiços>
          <BlockCardServiços>
            <HeaderCardServiços>
              <FrameServiços src={Gestao} alt='fascino' priority={true} />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='gestão imobiliária'
                text='realizamos o acompanhamento desde a busca pelo seu imóvel até o momento de pegar a chave.'
              />
            </BodyCardServiços>
          </BlockCardServiços>
          {/*  */}
          <BlockCardServiços>
            <HeaderCardServiços>
              <FrameServiços src={Assessoria} alt='fascino' priority={true} />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='assessoria'
                text='facilitamos a aquisição, agilizando partes burocráticas e demoradas.'
              />
            </BodyCardServiços>
          </BlockCardServiços>
          {/*  */}
          <BlockCardServiços>
            <HeaderCardServiços>
              <FrameServiços src={Padrao} alt='fascino' priority={true} />
            </HeaderCardServiços>
            <BodyCardServiços>
              <Headline
                title='alto padrão'
                text='especializados em propriedades de alto e médio padrão, conectamos você às melhores oportunidades.'
              />
            </BodyCardServiços>
          </BlockCardServiços>
          {/*  */}
        </ViewGridServiços>
      </ContentServiços>
    </WrapperServiços>
  )
}
