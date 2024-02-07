import styled from 'styled-components'

import Back from 'assets/img/Back.webp'

export const WrapperHero = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    width: 100vw;
    height: 100%;

    position: absolute;

    background: url(${Back.src}) bottom no-repeat fixed;
    background-size: cover;
  }

  &::after {
    content: '';
    width: 100vw;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Opacity};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    justify-content: start;

    &::after {
      content: '';
      width: 100vw;
      height: 100%;
      background-color: ${(props) => props.theme.colors.Opacity};
      position: absolute;
      top: 50%;
      left: auto;
      transform: translate(-35%, -50%);
    }
  }
`
export const ContentHero = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1.5rem;

  z-index: 1;

  &:first-child > div:nth-child(1) {
    width: auto;
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    z-index: 1;

    h1 {
      font-size: 3.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 5.7rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: left;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: left;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  &:first-child > button {
    background: none;
    border: solid 0.2rem ${(props) => props.theme.colors.Branco};
    border-radius: 0.6rem;
    padding: 0.9rem 2rem;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;
    cursor: pointer;

    &::first-letter {
      text-transform: capitalize;
    }

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;

    &:active {
      transform: translateY(0.2rem);
      -webkit-transform: translateY(0.2rem);
    }
  }

  position: relative;

  &::before {
    content: '';
    width: 10rem;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: ${(props) => props.theme.colors.Amarelo};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    max-width: 50rem;
    /* border: solid red 5px; */
  }

  @media (max-width: ${(props) => props.theme.screenSize.XS}) {
    &:first-child > div:nth-child(1) {
      h1 {
        font-size: 3rem;
        line-height: 4.5rem;
      }
    }
  }
`
