import Image from 'next/image'

import styled from 'styled-components'

export const WrapperLocal = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentLocal = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;
  padding: 6rem 2rem;

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

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 6rem;
  }
`
export const ViewLocal = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

    position: relative;

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
  }
`
export const BlockCardLocal = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
  z-index: 1;
`
export const BodyCardLocal = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;

  & > div:nth-child(2) {
    width: auto;

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

  button {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
    background-color: ${(props) => props.theme.colors.Marrom};
    text-align: center;

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
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(2) {
      width: 30rem;
      h1,
      p {
        color: ${(props) => props.theme.colors.Branco};
      }
    }
    svg {
      color: ${(props) => props.theme.colors.Branco};
    }

    button {
      background-color: ${(props) => props.theme.colors.Branco};
      color: ${(props) => props.theme.colors.Marrom};
    }
  }
`
export const FrameLocal = styled(Image)`
  width: 100%;
  height: auto;

  object-fit: fill;
  -o-object-fit: fill;

  object-position: center;
  -o-object-position: center;
  z-index: 1;
`
