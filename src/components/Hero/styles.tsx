import styled from 'styled-components'

import Background from 'assets/img/RealState.webp'

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

    background: url(${Background.src}) center no-repeat fixed;
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

  animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  -webkit-animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &::after {
      content: '';
      width: 100vw;
      height: 100%;
      background-color: ${(props) => props.theme.colors.Opacity};
      position: absolute;
      top: 50%;
      left: auto;
      transform: translate(-45%, -50%);
    }
  }
`
export const ContentHero = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    align-items: start;
  }
`
export const ViewHero = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 3rem 2rem;

    border-top: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
    border-bottom: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
    border-left: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
    border-right: 0.5rem solid transparent;

    border-image: linear-gradient(
        to top,
        ${(props) => props.theme.colors.Amarelo},
        transparent 30%,
        transparent 70%,
        ${(props) => props.theme.colors.Amarelo}
      )
      1;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    border: none;
    padding: 3rem 2rem;

    position: relative;

    &::before {
      content: '';
      width: 75rem;
      height: 100%;

      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      border-top: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
      border-bottom: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
      border-left: solid 0.5rem ${(props) => props.theme.colors.Amarelo};
      border-right: 0.5rem solid transparent;

      border-image: linear-gradient(
          to top,
          ${(props) => props.theme.colors.Amarelo},
          transparent 30%,
          transparent 70%,
          ${(props) => props.theme.colors.Amarelo}
        )
        1;
    }

    &:first-child > div:nth-child(1) + button {
      z-index: 1;
    }
  }

  &:first-child > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 3.8rem;
      font-style: normal;
      font-weight: 600;
      line-height: 5.7rem;
      color: ${(props) => props.theme.colors.Branco};
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
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

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

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    max-width: 50rem;

    &:first-child > div:nth-child(1) {
      h1 {
        font-size: 4.8rem;
        line-height: 7.2rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &:first-child > div:nth-child(1) {
      h1,
      p {
        text-align: left;
      }

      h1 {
        font-size: 3.8rem;
        line-height: 5.7rem;
      }
    }
  }
`
