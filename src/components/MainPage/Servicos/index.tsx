import { BiSolidBank } from 'react-icons/bi'
import { FaHome, FaHandshake } from 'react-icons/fa'

import { Headline } from 'components/Ui/Headline'

import {
  BlockCardsServicos,
  BodyCardServicos,
  ContentServicos,
  FrameHeaderServicos,
  HeaderCardServicos,
  InnerCardServicos,
  InnerFrameServicos,
  ViewServicos,
  WrapperServicos
} from './styles'

export default function Servicos() {
  return (
    <WrapperServicos>
      <ContentServicos>
        <Headline
          title='somos pioneiros na inovação'
          text='á frente da inovação, transformamos ideias em realidade.'
        />
        <ViewServicos>
          <BlockCardsServicos>
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FaHome />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='gestão imobiliária'
                  text='realizamos o acompanhamento desde a busca pelo seu imóvel até o momento de pegar a chave.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FaHandshake />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='assessoria'
                  text='facilitamos a aquisição, agilizando partes burocráticas e demoradas.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <BiSolidBank />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='alto padrão'
                  text='especializados em propriedades de alto e médio padrão, conectamos você às melhores oportunidades imobiliárias.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
          </BlockCardsServicos>
          {/*  */}
        </ViewServicos>
      </ContentServicos>
    </WrapperServicos>
  )
}
