import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BlockImoveis,
  ContentImoveis,
  FrameImoveis,
  InnerImoveis,
  ViewImoveis,
  WrapperImoveis
} from './styles'

import AvantiPr from 'assets/img/Avanti-1.webp'
import AvantiSc from 'assets/img/Avanti-2.webp'
import AvantiTd from 'assets/img/Avanti-3.webp'
import AvantiFt from 'assets/img/Avanti-4.webp'
import FascinoPr from 'assets/img/Fascino-1.webp'
import FascinoSc from 'assets/img/Fascino-2.webp'
import FascinoTd from 'assets/img/Fascino-3.webp'
import FascinoFt from 'assets/img/Fascino-4.webp'
import GreenParkPr from 'assets/img/GreenPark-1.webp'
import GreenParkSc from 'assets/img/GreenPark-2.webp'
import GreenParkTd from 'assets/img/GreenPark-3.webp'
import GreenParkFt from 'assets/img/GreenPark-4.webp'
import TerraDoSolPr from 'assets/img/Terra-do-sol-1.webp'
import TerraDoSolSc from 'assets/img/Terra-do-sol-2.webp'
import TerraDoSolTd from 'assets/img/Terra-do-sol-3.webp'
import TerraDoSolFt from 'assets/img/Terra-do-sol-4.webp'

export default function Imoveis() {
  return (
    <WrapperImoveis>
      <ContentImoveis>
        <Headline
          title='alguns de nossos imóveis'
          text='veja abaixo alguns de nossos imóveis.'
        />
        <ViewImoveis>
          <BlockImoveis>
            <Headline
              title='ed. Avanti'
              text='moradia revolucionária, tecnologia e design inovador. Ambientes inteligentes e sustentáveis para viver o amanhã hoje.'
            />
            <InnerImoveis>
              <FrameImoveis src={AvantiPr} alt='' priority={true} />
              <FrameImoveis src={AvantiSc} alt='' priority={true} />
              <FrameImoveis src={AvantiTd} alt='' priority={true} />
              <FrameImoveis src={AvantiFt} alt='' priority={true} />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='res. Terra do sol'
              text='explore residências que unem o requinte a um ambiente acolhedor. Cada detalhe foi cuidadosamente projetado para oferecer um estilo de vida sofisticado e confortável. Seu refúgio de luxo pessoal.'
            />
            <InnerImoveis>
              <FrameImoveis src={TerraDoSolPr} alt='' priority={true} />
              <FrameImoveis src={TerraDoSolSc} alt='' priority={true} />
              <FrameImoveis src={TerraDoSolTd} alt='' priority={true} />
              <FrameImoveis src={TerraDoSolFt} alt='' priority={true} />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='ed. Fascino'
              text='descubra residências exclusivas, onde sofisticação encontra conforto. Detalhes cuidadosamente projetados para uma experiência única.'
            />
            <InnerImoveis>
              <FrameImoveis src={FascinoPr} alt='' priority={true} />
              <FrameImoveis src={FascinoSc} alt='' priority={true} />
              <FrameImoveis src={FascinoTd} alt='' priority={true} />
              <FrameImoveis src={FascinoFt} alt='' priority={true} />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
          <BlockImoveis>
            <Headline
              title='ed. Green Park'
              text='estilo de vida excepcional com lazer premium, espaços verdes e uma comunidade acolhedora. Sua jornada para uma vida extraordinária começa aqui.'
            />
            <InnerImoveis>
              <FrameImoveis src={GreenParkPr} alt='' priority={true} />
              <FrameImoveis src={GreenParkSc} alt='' priority={true} />
              <FrameImoveis src={GreenParkTd} alt='' priority={true} />
              <FrameImoveis src={GreenParkFt} alt='' priority={true} />
            </InnerImoveis>
          </BlockImoveis>
          {/*  */}
        </ViewImoveis>
        <Button onClick={() => {}} text='ver mais' />
      </ContentImoveis>
    </WrapperImoveis>
  )
}
