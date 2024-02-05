'use client'

import { useRouter } from 'next/navigation'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import { ContentHero, ViewHero, WrapperHero } from './styles'

export default function Hero() {
  const navigation = useRouter()
  return (
    <WrapperHero>
      <ContentHero>
        <ViewHero>
          <Headline
            title='explore, encontre. Sua nova jornada começa aqui.'
            text='descubra um universo de opções e encontre o lar que sempre sonhou. Cada cantinho é uma porta aberta para uma nova história.'
          />
          <Button
            onClick={() => navigation.push('https://wa.link/bi4dwn')}
            text='conhecer'
            icon=''
          />
        </ViewHero>
      </ContentHero>
    </WrapperHero>
  )
}
