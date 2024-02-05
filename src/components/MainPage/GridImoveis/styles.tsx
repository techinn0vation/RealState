import Image from 'next/image'

import styled from 'styled-components'

export const WrapperGridImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentGridImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  &:first-child > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.6rem;
      color: ${(props) => props.theme.colors.Preto};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Preto};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &:first-child > div:nth-child(1) {
      max-width: 45rem;
    }
  }
`
export const ViewGridImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BlockGridImoveis = styled.div`
  width: 100vw;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: center;
  gap: 1rem;

  padding: 0 2rem 0 2rem;
  scroll-snap-align: start;

  &::-webkit-scrollbar {
    height: auto;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 0;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    padding: 0;

    img {
      width: 100%;
      transition: transform 0.3s ease;

      &:hover {
        transform: rotateY(10deg) scale(1.3);
      }
    }
  }
`

export const InnerFrameImoveisGrid = styled(Image)`
  width: 30rem;
  height: auto;

  object-fit: cover;
  -o-object-fit: cover;
  object-position: center;
  -o-object-position: center;
`
