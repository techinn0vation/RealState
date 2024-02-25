import Image from 'next/image'

import styled from 'styled-components'

export const WrapperExclusivo = styled.section`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

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
export const ViewExclusivo = styled.div`
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
export const BlockCardExclusivo = styled.div`
  width: 100%;
  height: 25rem;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
  padding: 0.9rem;

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
  height: auto;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;
`
export const BodyCardExclusivo = styled.div`
  width: 100%;
  height: 10rem;

  display: grid;
  place-items: center;
  align-items: start;

  & > p {
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
`
export const FrameCardExclusivo = styled(Image)`
  width: 6rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
