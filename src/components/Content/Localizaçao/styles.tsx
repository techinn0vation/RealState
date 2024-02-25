import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const WrapperLocalizaçao = styled.section`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentLocalizaçao = styled.section`
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
export const ViewLocalizaçao = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    place-items: center;
    position: relative;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

    &::before {
      content: '';
      width: 100vw;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.Marrom};
    }

    & > div:nth-child(-n + 2) {
      z-index: 1;
    }
  }
`
export const BlockCardLocalizaçao = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  & > div:nth-child(2) {
    width: 100%;

    display: grid;
    place-items: center;
    align-items: center;
    gap: 2rem;

    h1 {
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

  svg {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.Marrom};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    svg {
      color: ${(props) => props.theme.colors.Branco};
    }

    & > div:nth-child(2) {
      max-width: 32rem;
      h1,
      p {
        color: ${(props) => props.theme.colors.Branco};
      }
    }

    a {
      background-color: ${(props) => props.theme.colors.Branco};
      color: ${(props) => props.theme.colors.Marrom};
    }
  }
`
export const ButtonLocalizaçao = styled(Link)`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Branco};
  background-color: ${(props) => props.theme.colors.Marrom};
  text-align: center;
  text-decoration: none;

  &::first-letter {
    text-transform: capitalize;
  }

  padding: 0.875rem 2rem;
  border-radius: 0.375rem;

  transition: ease-in 0.03s;
  -webkit-transition: ease-in 0.03s;

  &:active {
    transform: translateY(0.2rem);
    -webkit-transform: translateY(0.2rem);
  }
`
export const BlockFrameLocalizaçao = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
`
export const FrameLocalizaçao = styled(Image)`
  width: 100%;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
