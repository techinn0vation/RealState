import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockImoveis,
  ContentImoveis,
  InnerFrameImoveis,
  InnerImoveis,
  ViewImoveis,
  WrapperImoveis
} from './styles'

import Avanti4 from 'assets/img/AVANTI - Área de Lazer.jpg'
import Avanti1 from 'assets/img/AVANTI - Fachada.jpg'
import Avanti2 from 'assets/img/AVANTI - Lobby.jpg'
import Avanti3 from 'assets/img/AVANTI - Piscina.jpg'
import Ciplart1 from 'assets/img/ciplart1.webp'
import Ciplart2 from 'assets/img/ciplart2.webp'
import Ciplart3 from 'assets/img/ciplart3.webp'
import Ciplart4 from 'assets/img/ciplart4.webp'
import ExternoA from 'assets/img/EXT1.webp'
import ExternoB from 'assets/img/EXT2.webp'
import ExternoC from 'assets/img/EXT3.webp'
import ExternoD from 'assets/img/EXT4.webp'
import Fascino1 from 'assets/img/fascino1.jpg'
import Fascino2 from 'assets/img/fascino2.jpeg'
import Fascino3 from 'assets/img/fascino3.jpg'
import Fascino4 from 'assets/img/fascino4.png'

export default function Imoveis() {
  return (
    <WrapperImoveis>
      <ContentImoveis>
        <Headline
          title='alguns dos nossos imóveis'
          text='veja abaixo alguns dos nossos imóveis em diferentes áreas.'
        />
        <ViewImoveis>
          <BlockImoveis>
            <Headline
              title='elegância e conforto'
              text='estilo de vida excepcional com lazer premium, espaços verdes e uma comunidade acolhedora. Sua jornada para uma vida extraordinária começa aqui.'
            />
            <InnerImoveis>
              <InnerFrameImoveis
                src={ExternoA}
                alt='imovel'
                priority={true}
                id='img-1'
              />
              <InnerFrameImoveis
                src={ExternoB}
                alt='imovel'
                priority={true}
                id='img-2'
              />
              <InnerFrameImoveis
                src={ExternoC}
                alt='imovel'
                priority={true}
                id='img-3'
              />
              <InnerFrameImoveis
                src={ExternoD}
                alt='imovel'
                priority={true}
                id='img-4'
              />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='o futuro chegou'
              text='moradia revolucionária, tecnologia e design inovador. Ambientes inteligentes e sustentáveis para viver o amanhã hoje.'
            />
            <InnerImoveis>
              <InnerFrameImoveis
                src={Ciplart1}
                alt='imovel'
                priority={true}
                id='img-5'
              />
              <InnerFrameImoveis
                src={Ciplart2}
                alt='imovel'
                priority={true}
                id='img-6'
              />
              <InnerFrameImoveis
                src={Ciplart3}
                alt='imovel'
                priority={true}
                id='img-7'
              />
              <InnerFrameImoveis
                src={Ciplart4}
                alt='imovel'
                priority={true}
                id='img-8'
              />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='elegância e conforto'
              text='explore residências que unem o requinte a um ambiente acolhedor. Cada detalhe foi cuidadosamente projetado para oferecer um estilo de vida sofisticado e confortável. Seu refúgio de luxo pessoal.'
            />
            <InnerImoveis>
              <InnerFrameImoveis
                src={Fascino1}
                alt='imovel'
                priority={true}
                id='img-9'
              />
              <InnerFrameImoveis
                src={Fascino2}
                alt='imovel'
                priority={true}
                id='img-9'
              />
              <InnerFrameImoveis
                src={Fascino3}
                alt='imovel'
                priority={true}
                id='img-10'
              />
              <InnerFrameImoveis
                src={Fascino4}
                alt='imovel'
                priority={true}
                id='img-11'
              />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='vida extraordinária'
              text='descubra residências exclusivas, onde sofisticação encontra conforto. Detalhes cuidadosamente projetados para uma experiência única.'
            />
            <InnerImoveis>
              <InnerFrameImoveis
                src={Avanti1}
                alt='imovel'
                priority={true}
                id='img-12'
              />
              <InnerFrameImoveis
                src={Avanti2}
                alt='imovel'
                priority={true}
                id='img-13'
              />
              <InnerFrameImoveis
                src={Avanti3}
                alt='imovel'
                priority={true}
                id='img-14'
              />
              <InnerFrameImoveis
                src={Avanti4}
                alt='imovel'
                priority={true}
                id='img-15'
              />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
        </ViewImoveis>
        <Button text='ver mais' icon='' />
      </ContentImoveis>
    </WrapperImoveis>
  )
}
