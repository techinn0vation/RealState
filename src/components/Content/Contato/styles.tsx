import styled from 'styled-components'

export const WrapperContato = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentContato = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;

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

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 2rem;
  }

  @media (min-width: ${(props) => props.theme.screenSize.XL}) {
    padding: 6rem;
  }
`
export const ViewContato = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    place-items: end;
    position: relative;

    &::before {
      content: '';
      width: 100vw;
      height: 70%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${(props) => props.theme.colors.Marrom};
    }

    & > div:nth-child(1) {
      max-width: 36rem;
      background-color: ${(props) => props.theme.colors.Branco};
      box-shadow: 0 0 1.6rem 0 ${(props) => props.theme.colors.ShadowCard};

      z-index: 1;

      border-top: solid 0.5rem ${(props) => props.theme.colors.Marrom};
      border-bottom: solid 0.5rem ${(props) => props.theme.colors.Marrom};
      border-left: solid 0.5rem ${(props) => props.theme.colors.Marrom};
      border-right: 0.5rem solid transparent;

      border-image: linear-gradient(
          to top,
          ${(props) => props.theme.colors.Marrom},
          transparent 15%,
          transparent 85%,
          ${(props) => props.theme.colors.Marrom}
        )
        1;
    }
  }
`
export const BlockFormulario = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  padding: 2rem;
  gap: 2rem;

  button {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
    background-color: ${(props) => props.theme.colors.Marrom};
    text-align: center;
    cursor: pointer;

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
`
export const InnerBlockFields = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 2rem;
`
export const InnerField = styled.input`
  width: 100%;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Preto};

  text-align: left;

  padding: 1.6rem 0;

  border: none;
  border-radius: 0.2rem;
  outline: none;
  border-bottom: solid 0.2rem ${(props) => props.theme.colors.Marrom};
`
export const BlockMensagem = styled.textarea`
  width: 100%;
  height: 20rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Preto};
  text-align: left;

  padding: 1.6rem;

  border: none;
  border-radius: 0.2rem;
  outline: none;
  border: solid 0.2rem ${(props) => props.theme.colors.Marrom};
  resize: none;
`
