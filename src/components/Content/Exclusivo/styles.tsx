import Image from 'next/image'

import styled from 'styled-components'

export const WrapperExclusivo = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentExclusivo = styled.main`
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
export const ViewGridExclusivo = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const BlockExclusivo = styled.div`
  width: 100%;
  height: 25rem;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;

  &:nth-child(1) {
    background-color: ${(props) => props.theme.colors.Marrom};
  }
  &:nth-child(4) {
    background-color: ${(props) => props.theme.colors.Marrom};
  }
  &:nth-child(5) {
    background-color: ${(props) => props.theme.colors.Marrom};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &:nth-child(4) {
      background-color: ${(props) => props.theme.colors.Branco};
    }
    &:nth-child(3) {
      background-color: ${(props) => props.theme.colors.Marrom};
    }
  }
`
export const HeaderCardExclusivo = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
`
export const BodyCardExclusivo = styled.div`
  width: 100%;
  height: 10rem;

  display: grid;
  place-items: center;
  align-items: start;

  & > div:nth-child(1) {
    width: 100%;

    display: grid;
    place-items: center;
    align-items: start;

    h1 {
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

    p {
      display: none;
    }
  }
`
export const FrameCardExclusivo = styled(Image)`
  width: 6rem;
  height: auto;

  object-fit: fill;
  -o-object-fit: fill;

  object-position: center;
  -o-object-position: center;
`
