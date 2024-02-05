import Image from 'next/image'

import styled from 'styled-components'

export const WrapperImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  &:first-child > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.6rem;
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

  &:first-child > button {
    background: none;
    border: solid 0.2rem ${(props) => props.theme.colors.Azul};
    border-radius: 0.6rem;
    padding: 0.9rem 2rem;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Azul};
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
    &:first-child > div:nth-child(1) {
      max-width: 40rem;
    }
  }
`
export const ViewImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const BlockImoveis = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  &:nth-child(-n + 4) > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 2.4rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.6rem;
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

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
    padding: 6rem 2rem;

    position: relative;

    &:nth-child(2) {
      flex-direction: row-reverse;

      &::before {
        content: '';
        width: 75%;
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
            transparent 20%,
            transparent 85%,
            ${(props) => props.theme.colors.Amarelo}
          )
          1;
      }
    }

    &:nth-child(4) {
      flex-direction: row-reverse;

      &::before {
        content: '';
        width: 75%;
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
            transparent 20%,
            transparent 85%,
            ${(props) => props.theme.colors.Amarelo}
          )
          1;
      }
    }

    &:nth-child(-n + 4) > div:nth-child(1) {
      width: 100%;
    }
  }
`
export const InnerImoveis = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 1;
`
export const InnerFrameImoveis = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  object-position: center;
  -o-object-position: center;

  &:nth-child(1) {
    border-radius: 2rem 0 1.5rem 0;
  }
  &:nth-child(2) {
    border-radius: 0 2rem 0 1.5rem;
  }
  &:nth-child(3) {
    border-radius: 0 1.5rem 0 3rem;
  }
  &:nth-child(4) {
    border-radius: 1.5rem 0 3rem 0;
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: rotateY(10deg) scale(1.3);
  }
`
