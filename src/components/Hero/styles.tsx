import styled from 'styled-components'

import Back from 'assets/img/Build.webp'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;
  align-items: start;

  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(${Back.src}) center no-repeat fixed;
    background-size: cover;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Shadow};
    top: 0;
    left: 0;
  }
`
export const ContentHero = styled.main`
  width: 100%;
  height: auto;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 1.6rem;

  padding: 9rem 1.5rem;
  z-index: 1;

  & > div:nth-child(1) {
    width: auto;
    display: grid;
    place-items: center;
    align-items: start;
    gap: 1.6rem;

    h1 {
      font-size: 10rem;
      font-style: normal;
      font-weight: 600;
      line-height: 5.7rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;
      writing-mode: vertical-lr;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      display: none;
    }
  }
`
