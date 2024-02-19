import Headline from 'components/Ui/Headline'

import {
  BlockExclusivo,
  BodyCardExclusivo,
  ContentExclusivo,
  FrameCardExclusivo,
  HeaderCardExclusivo,
  ViewGridExclusivo,
  WrapperExclusivo
} from './styles'

import Elev from 'assets/img/Elevator.webp'
import Energy from 'assets/img/Energy.webp'
import Garage from 'assets/img/Garage.webp'
import Hotel from 'assets/img/Hotel.webp'
import Room from 'assets/img/Room.webp'
import Wide from 'assets/img/Wide.webp'

export default function Exclusivo() {
  return (
    <WrapperExclusivo>
      <ContentExclusivo>
        <Headline title='exclusivo' text='' />
        {/*  */}
        <ViewGridExclusivo>
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Room} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='3 suítes' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Wide} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='137m² e 164m² privativos' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Garage} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='3 vagas de garagem' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Hotel} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='2 apart. Por andar' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Elev} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='elevador para delivery' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
          <BlockExclusivo>
            <HeaderCardExclusivo>
              <FrameCardExclusivo src={Energy} alt='fascino' priority={true} />
            </HeaderCardExclusivo>
            <BodyCardExclusivo>
              <Headline title='gerador de energia' text='' />
            </BodyCardExclusivo>
          </BlockExclusivo>
          {/*  */}
        </ViewGridExclusivo>
      </ContentExclusivo>
    </WrapperExclusivo>
  )
}
