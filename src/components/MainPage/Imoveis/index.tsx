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

import ExternoA from 'assets/img/EXT1.webp'
import ExternoB from 'assets/img/EXT2.webp'
import ExternoC from 'assets/img/EXT3.webp'
import ExternoD from 'assets/img/EXT4.webp'
import ExternoE from 'assets/img/EXT6.webp'
import INTA from 'assets/img/INT1.webp'
import INTJ from 'assets/img/INT10.webp'
import INTK from 'assets/img/INT11.webp'
import INTB from 'assets/img/INT2.webp'
import INTC from 'assets/img/INT3.webp'
import INTD from 'assets/img/INT4.webp'
import INTE from 'assets/img/INT5.webp'
import INTF from 'assets/img/INT6.webp'
import INTG from 'assets/img/INT7.webp'
import INTH from 'assets/img/INT8.webp'
import INTI from 'assets/img/INT9.webp'

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
                src={INTA}
                alt='imovel'
                priority={true}
                id='img-5'
              />
              <InnerFrameImoveis
                src={INTB}
                alt='imovel'
                priority={true}
                id='img-6'
              />
              <InnerFrameImoveis
                src={INTC}
                alt='imovel'
                priority={true}
                id='img-7'
              />
              <InnerFrameImoveis
                src={INTD}
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
                src={INTE}
                alt='imovel'
                priority={true}
                id='img-9'
              />
              <InnerFrameImoveis
                src={INTF}
                alt='imovel'
                priority={true}
                id='img-9'
              />
              <InnerFrameImoveis
                src={INTG}
                alt='imovel'
                priority={true}
                id='img-10'
              />
              <InnerFrameImoveis
                src={INTH}
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
                src={INTI}
                alt='imovel'
                priority={true}
                id='img-12'
              />
              <InnerFrameImoveis
                src={INTJ}
                alt='imovel'
                priority={true}
                id='img-13'
              />
              <InnerFrameImoveis
                src={INTK}
                alt='imovel'
                priority={true}
                id='img-14'
              />
              <InnerFrameImoveis
                src={ExternoE}
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
