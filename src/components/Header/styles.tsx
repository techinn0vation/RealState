import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: center;

  z-index: 1;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 16rem;
      height: 200vh;
      background-color: ${(props) => props.theme.colors.Marrom};
      top: 0;
      left: 0;
      transform: translate(0);
    }

    &::after {
      content: '';
      position: absolute;
      width: 1.5rem;
      height: 100%;
      background-color: ${(props) => props.theme.colors.Marrom};
      top: 100%;
      right: 0;
      transform: translate(-50%, 100%);
    }
  }
`
export const ContentHeader = styled.main`
  width: 23rem auto;
  display: grid;
  place-items: center;
  align-items: center;

  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.Marrom};
`
export const LogoBranding = styled(Image)`
  width: 20rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
