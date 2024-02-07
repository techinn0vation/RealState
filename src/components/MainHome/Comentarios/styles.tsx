import Image from 'next/image'

import styled from 'styled-components'

export const WrapperServicos = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
`
export const ContentServicos = styled.div`
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

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &:first-child > div:nth-child(1) {
      max-width: 40rem;
    }
  }
`
export const ViewServicos = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: relative;
    gap: 10rem;

    &::before {
      content: '';
      width: 100vw;
      height: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.Amarelo};
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    max-width: 85rem;
  }
`
export const BlockCardsServicos = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;

    z-index: 1;

    &:nth-child(1) {
      &:nth-child(1) > div:nth-child(2) {
        margin-top: 5rem;
      }

      &:nth-child(1) > div:nth-child(-n + 3) {
        div:nth-child(2) {
          align-items: start;
          height: 28rem;
        }
      }
    }

    &:nth-child(2) {
      &:nth-child(2) > div:nth-child(2) {
        margin-top: -5rem;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &:nth-child(1) {
      &:nth-child(1) > div:nth-child(-n + 3) {
        width: 30rem;
        div:nth-child(2) {
          align-items: start;
          height: 25rem;
        }
      }
    }
  }
`
export const InnerCardServicos = styled.div`
  width: 90%;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 1rem 0 ${(props) => props.theme.colors.CinzaEscuro};

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 100%;
  }
`
export const HeaderCardServicos = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Azul};
  border-radius: 2rem 2rem 0 0;
  padding: 2rem;
`
export const FrameHeaderServicos = styled.div`
  width: auto;

  display: grid;
  place-items: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Branco};
  border-radius: 100%;
  padding: 0.5rem;
`
export const InnerFrameServicos = styled.div`
  width: auto;

  display: grid;
  place-items: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.Azul};
  border-radius: 100%;
  padding: 0.9rem;

  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.Branco};
  }
`
export const FrameComentarios = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  object-fit: cover;
  -o-object-fit: cover;

  object-position: center;
  -o-object-position: center;
`

export const BodyCardServicos = styled.div`
  width: 100%;
  height: 25rem;

  background-color: ${(props) => props.theme.colors.Cinza};
  border-radius: 0 0 2rem 2rem;
  padding: 3rem 1.5rem;

  display: grid;
  place-items: center;
  align-items: center;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

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
`
