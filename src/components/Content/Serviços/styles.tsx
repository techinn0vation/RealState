import Image from 'next/image'

import styled from 'styled-components'

export const WrapperServiços = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentServiços = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;
  padding: 6rem 0;

  & > div:nth-child(1) {
    width: auto;

    display: grid;
    place-items: center;
    align-items: center;

    h1 {
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

    p {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 2rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 6rem;
  }
`
export const ViewGridServiços = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const BlockCardServiços = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 33rem;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;

  border-bottom: solid 1rem ${(props) => props.theme.colors.Marrom};

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    max-width: 100%;
    height: 36rem;

    &:nth-child(2) {
      background-color: ${(props) => props.theme.colors.Marrom};
    }

    & > div:nth-child(2) {
      height: 18rem;
      border-bottom: none;
    }
  }
`
export const HeaderCardServiços = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
`
export const BodyCardServiços = styled.div`
  width: 100%;
  height: 15rem;

  display: grid;
  place-items: center;
  align-items: start;

  & > div:nth-child(1) {
    width: 100%;

    display: grid;
    place-items: center;
    align-items: start;
    gap: 1rem;

    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Preto};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.1rem;
      color: ${(props) => props.theme.colors.Preto};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`
export const FrameServiços = styled(Image)`
  width: 6rem;
  height: auto;

  object-fit: fill;
  -o-object-fit: fill;

  object-position: center;
  -o-object-position: center;
`
