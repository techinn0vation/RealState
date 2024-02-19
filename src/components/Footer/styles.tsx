import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100%;
  max-width: 108rem;
  height: auto;

  display: grid;
  place-items: center;
  align-items: center;

  position: relative;

  &::before {
    content: '';
    width: 100vw;
    height: 100%;
    position: absolute;
    top: 0;
    left: auto;
    background-color: ${(props) => props.theme.colors.Preto};
  }
`
export const ContentFooter = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: center;
  gap: 2rem;

  z-index: 1;

  &:nth-child(1) > div:nth-child(2) {
    width: auto;
    display: grid;
    place-items: center;
    align-items: center;

    padding: 2rem;

    h1 {
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

    p {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 42rem;
  }
`
export const LogoFooter = styled(Image)`
  width: 20rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;

  object-position: center;
  -o-object-position: center;

  background-color: ${(props) => props.theme.colors.Marrom};
`
export const BlockFields = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 0 0 2.3rem 0;
`

export const ButtonSocialField = styled(Link)`
  cursor: pointer;

  svg {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.Branco};
  }
`
