import styled from 'styled-components'

import Background from 'assets/img/FascinoDois.webp'

export const WrapperLetreiro = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentLetreiro = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  padding: 6rem 2rem;

  & > div:nth-child(1) {
    width: auto;
    display: grid;
    place-items: center;
    align-items: center;

    h1 {
      font-size: 10rem;
      font-style: normal;
      font-weight: 600;
      line-height: 15rem;
      text-align: center;
      writing-mode: vertical-lr;

      &::first-letter {
        text-transform: capitalize;
      }

      background: url(${Background.src}) right no-repeat fixed;
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    p {
      display: none;
    }
  }
  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    & > div:nth-child(1) {
      h1 {
        font-size: 12rem;
        line-height: 18rem;
        writing-mode: horizontal-tb;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 6rem;

    & > div:nth-child(1) {
      h1 {
        font-size: 14rem;
        line-height: 21rem;
        writing-mode: horizontal-tb;
      }
    }
  }
`
