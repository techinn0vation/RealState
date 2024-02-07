import styled from 'styled-components'

import Background from 'assets/img/GreenPark-3.webp'

export const WrapperContato = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 6rem 2rem;
`
export const ContentContato = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

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
export const ViewContato = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    align-items: end;

    position: relative;

    &::before {
      content: '';
      width: 100vw;
      height: 65%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(${Background.src}) center no-repeat;
      background-size: cover;
    }
  }
`
export const BlockContato = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;

  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    border-top: solid 0.5rem ${(props) => props.theme.colors.Azul};
    border-bottom: solid 0.5rem ${(props) => props.theme.colors.Azul};
    border-left: solid 0.5rem ${(props) => props.theme.colors.Azul};
    border-right: 0.5rem solid transparent;

    border-image: linear-gradient(
        to top,
        ${(props) => props.theme.colors.Azul},
        transparent 20%,
        transparent 80%,
        ${(props) => props.theme.colors.Azul}
      )
      1;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    max-width: 42rem;
  }
`
export const InnerContato = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  background: ${(props) => props.theme.colors.Azul};
  padding: 3rem 2rem;

  z-index: 1;

  &:first-child > button:nth-of-type(1) {
    background: ${(props) => props.theme.colors.Branco};
    border-radius: 0.5rem;
    padding: 0.9rem 2rem;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
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
`
export const InnerInput = styled.input`
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.5rem;
  outline: none;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Preto};
  text-align: left;
`
export const BlockMessage = styled.textarea`
  width: 100%;
  height: 16rem;
  padding: 1.6rem;
  border-radius: 0.5rem;
  outline: none;
  resize: none;

  font-size: 1.6rem;
  font-style: normal;
  font-family: sans-serif;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Preto};
  text-align: left;
`
