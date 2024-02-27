import Headline from 'components/Ui/Headline'

import { ContentLetreiro, WrapperLetreiro } from './styles'
import ButtonZap from 'components/Ui/ButtonZap'

export default function Letreiro() {
  return (
    <WrapperLetreiro>
      <ButtonZap text='Tire suas Dúvidas' link='https://wa.link/v7gkh1'/>

      <ContentLetreiro>
        <Headline title='fascino' text='' />
      </ContentLetreiro>
    </WrapperLetreiro>
  )
}
