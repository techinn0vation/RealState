'use client'

import Contato from './Contato'
import Exclusivo from './Exclusivo'
import Letreiro from './Letreiro'
import Local from './Local'
import Luxuoso from './Luxuoso'
import ParallaxText from './Scroller'
import Serviços from './Serviços'
import { WrapperContent } from './styles'

export default function Content() {
  return (
    <WrapperContent>
      <Luxuoso />
      <Exclusivo />
      <Serviços />
      <Contato />
      <Local />
      <Letreiro />
      {/*  */}
      <ParallaxText baseVelocity={-4}>
        sofisticado cativante fascinante
      </ParallaxText>
      <ParallaxText baseVelocity={4}>
        arquitetura design paisagismo
      </ParallaxText>
      {/*  */}
    </WrapperContent>
  )
}
