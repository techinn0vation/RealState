import Image from 'next/image'

import styled from 'styled-components'

export const WrapperLuxuoso = styled.section`
  width: 100%;
  max-width: 108rem;

  display: grid;
  place-items: center;
  align-items: start;
`
export const ContentLuxuoso = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;
  padding: 6rem 0;

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
export const ViewGridLuxuoso = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  place-items: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }
`
export const FrameLuxuoso = styled(Image)`
  width: 100%;
  height: auto;

  object-fit: fill;
  -o-object-fit: fill;

  object-position: center;
  -o-object-position: center;
`
export const BlockGridLuxuoso = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.Marrom};
`
