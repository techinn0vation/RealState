import { Headline } from 'components/Ui/Headline'

import {
  BlockGridImoveis,
  ContentGridImoveis,
  InnerFrameImoveisGrid,
  ViewGridImoveis,
  WrapperGridImoveis
} from './styles'

import Frame from 'assets/img/Design.webp'

export default function GridImoveis() {
  return (
    <WrapperGridImoveis>
      <ContentGridImoveis>
        <Headline
          title='Lorem ipsum'
          text='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
        />
        <ViewGridImoveis>
          <BlockGridImoveis>
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
            <InnerFrameImoveisGrid src={Frame} alt='' priority={true} />
          </BlockGridImoveis>
        </ViewGridImoveis>
      </ContentGridImoveis>
    </WrapperGridImoveis>
  )
}
