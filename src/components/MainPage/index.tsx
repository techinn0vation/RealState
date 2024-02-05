'use client'

import Agencia from './Agencia'
import Comentarios from './Comentarios'
import Contato from './Contato'
import Imoveis from './Imoveis'
import Servicos from './Servicos'
import { ContentMainPage, WrapperMainPage } from './styles'

export default function MainPage() {
  return (
    <WrapperMainPage>
      <ContentMainPage>
        <Imoveis />
        <Servicos />
        <Comentarios />
        <Agencia />
        <Contato />
      </ContentMainPage>
    </WrapperMainPage>
  )
}
