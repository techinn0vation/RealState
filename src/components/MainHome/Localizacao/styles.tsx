import styled from 'styled-components'

export const WrapperAgencia = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContentAgencia = styled.div`
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
      max-width: 45rem;
    }
  }
`
export const ViewAgencia = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  position: relative;
  padding: 10rem 0;

  &::before {
    content: '';
    width: 50%;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);

    background-color: ${(props) => props.theme.colors.Amarelo};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    &::before {
      content: '';
      width: 100%;
      height: 30%;

      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);

      background-color: ${(props) => props.theme.colors.Amarelo};
    }
  }
`
export const BlockAgencia = styled.div`
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
    justify-content: center;

    div:nth-child(-n + 3) {
      border-radius: 0 2rem 0 2rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    div:nth-child(-n + 3) {
      width: 25rem;
      padding: 3rem 2rem;
    }
  }
`
export const InnerFlexAgencia = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  z-index: 1;

  background: ${(props) => props.theme.colors.Azul};
  box-shadow: 0 0 1rem 0 ${(props) => props.theme.colors.Opacity};

  &:nth-child(-n + 3) > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.25rem;
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
`
