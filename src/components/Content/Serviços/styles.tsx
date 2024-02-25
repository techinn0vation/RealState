import Image from 'next/image'

import styled from 'styled-components'

export const WrapperServiços = styled.section`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

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
export const ViewServiços = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
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
export const BlockServiços = styled.div`
  width: 100%;
  max-width: 30rem;
  height: 30rem;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 1rem;

  padding: 1.5rem;

  border-bottom: solid 1rem ${(props) => props.theme.colors.Marrom};

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &:nth-child(2) {
      background-color: ${(props) => props.theme.colors.Marrom};
    }
  }
`
export const HeaderCardServiços = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;
`
export const BodyCardServiços = styled.div`
  width: 100%;
  height: 10rem;

  display: grid;
  place-items: center;
  align-items: center;

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
export const FrameCardServiços = styled(Image)`
  width: 6rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
