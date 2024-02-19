import { useRouter } from 'next/navigation'
import { IoMapSharp } from 'react-icons/io5'

import Button from 'components/Ui/Button'
import Headline from 'components/Ui/Headline'

import {
  BlockCardLocal,
  ContentLocal,
  FrameLocal,
  BodyCardLocal,
  ViewLocal,
  WrapperLocal
} from './styles'

import Maps from 'assets/img/Maps.webp'

export default function Local() {
  const navigation = useRouter()
  return (
    <WrapperLocal>
      <ContentLocal>
        <Headline title='visite-nos' text='' />
        <ViewLocal>
          <BlockCardLocal>
            <BodyCardLocal>
              <IoMapSharp />
              <Headline
                title='ficaremos felizes em te receber.'
                text='Av. Advogado Horácio Raccanello Filho, 6326 - Zona 7, Maringá - PR, 87020-025'
              />
              <Button
                text='visitar'
                onClick={() =>
                  navigation.push('https://maps.app.goo.gl/Jt1hVGsLPDRLGF6h7')
                }
              />
            </BodyCardLocal>
          </BlockCardLocal>
          <FrameLocal src={Maps} alt='fascino' priority={true} />
        </ViewLocal>
      </ContentLocal>
    </WrapperLocal>
  )
}
