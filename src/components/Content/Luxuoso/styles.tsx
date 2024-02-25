import Image from 'next/image'

import styled from 'styled-components'

export const WrapperGridImovel = styled.section`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentGridImovel = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;

  & > h1 {
    font-size: 5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 7.5rem;
    color: ${(props) => props.theme.colors.Preto};
    text-align: center;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    opacity: 0;
    transform: translateX(3rem);
    transition:
      opacity 0.5s,
      transform 0.5s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
export const ViewGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: start;

  gap: 0.3rem;
  padding: 0 0.3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    padding: 0 6rem;
  }
`
export const FrameGrid = styled(Image)`
  width: 100%;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
export const BlockHidden = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.Marrom};
`
