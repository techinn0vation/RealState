'use client'

import Agencia from './Agencia'
import Comentarios from './Comentarios'
import Contato from './Contato'
import Imoveis from './Imoveis'
import Servicos from './Servicos'
import { ContentMainHome, WrapperMainHome } from './styles'

export default function MainHome() {
  return (
    <WrapperMainHome>
      <ContentMainHome>
        <Imoveis />
        <Servicos />
        <Comentarios />
        <Contato />
        <Agencia />
      </ContentMainHome>
    </WrapperMainHome>
  )
}
