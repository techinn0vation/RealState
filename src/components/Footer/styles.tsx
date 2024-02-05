import Link from 'next/link'

import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  background-color: ${(props) => props.theme.colors.Azul};

  /* Animação Scroll */
  /* opacity: 0;
  transform: translateX(-3rem);
  transition:
    opacity 0.6s,
    transform 0.6s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  } */
`
export const ContentFooter = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10rem 2rem;

  z-index: 1;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    max-width: 48rem;
    margin: 0 auto;
  }
`
export const BlockFooter = styled.div`
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

  &:nth-child(2) {
    &::before {
      content: 'Siga-nos em nossas redes sociais';
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;
    }
  }

  &:nth-child(3) {
    div:nth-child(1) {
      h1 {
        display: none;
      }

      p {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.25rem;
        color: ${(props) => props.theme.colors.Branco};
        text-align: center;
        opacity: 0.5;
      }
    }
  }
`
export const ContentSocialFields = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const LinkSocialField = styled(Link)`
  display: grid;
  place-items: center;
  align-items: center;
  padding: 0.6rem;
  font-size: 1.6rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.Branco};
  color: ${(props) => props.theme.colors.Azul};
`
export const InnerSocialField = styled.div`
  display: grid;
  place-items: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: 100%;
  border: solid 0.3rem ${(props) => props.theme.colors.Azul};
`
