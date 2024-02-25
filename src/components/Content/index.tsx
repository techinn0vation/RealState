'use client'

import Contato from './Contato'
import Exclusivo from './Exclusivo'
import Letreiro from './Letreiro'
import Localizaçao from './Localizaçao'
import Luxuoso from './Luxuoso'
import Scroller from './Scroller'
import Serviços from './Serviços'
import { ContentMain, WrapperMain } from './styles'

export default function Content() {
  return (
    <WrapperMain>
      <ContentMain>
        <Luxuoso />
        <Exclusivo />
        <Serviços />
        <Contato />
        <Localizaçao />
        <Letreiro />
        {/*  */}
        <Scroller baseVelocity={-4}>sofisticado cativante fascinante</Scroller>
        <Scroller baseVelocity={4}>arquitetura design paisagismo</Scroller>
        {/*  */}
      </ContentMain>
    </WrapperMain>
  )
}
