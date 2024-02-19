import Headline from 'components/Ui/Headline'

import {
  BlockGridLuxuoso,
  ContentLuxuoso,
  FrameLuxuoso,
  ViewGridLuxuoso,
  WrapperLuxuoso
} from './styles'

import FascinoDois from 'assets/img/FascinoDois.webp'
import FascinoQuatro from 'assets/img/FascinoQuatro.webp'
import FascinoTres from 'assets/img/FascinoTres.webp'
import FascinoUm from 'assets/img/FascinoUm.webp'

export default function Luxuoso() {
  return (
    <WrapperLuxuoso>
      <ContentLuxuoso>
        <Headline title='luxuoso' text='' />

        <ViewGridLuxuoso>
          <BlockGridLuxuoso />
          <FrameLuxuoso src={FascinoUm} alt='fascino' priority={true} />
          <FrameLuxuoso src={FascinoDois} alt='fascino' priority={true} />
          <FrameLuxuoso src={FascinoTres} alt='fascino' priority={true} />
          <FrameLuxuoso src={FascinoQuatro} alt='fascino' priority={true} />
          <BlockGridLuxuoso />
        </ViewGridLuxuoso>
      </ContentLuxuoso>
    </WrapperLuxuoso>
  )
}
