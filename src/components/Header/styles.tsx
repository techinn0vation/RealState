import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHeader = styled.header`
  width: 100%;
  display: grid;
  place-items: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;

  &::before {
    content: '';
    width: 100vw;
    height: 100%;
    position: absolute;
    background-color: ${(props) => props.theme.colors.Amarelo};
  }
`
export const ContentHeader = styled.main`
  width: 100%;
  display: grid;
  place-items: center;
  align-items: center;
  z-index: 1;
`
export const LogoBranding = styled(Image)`
  width: 20rem;
  height: auto;

  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
`
