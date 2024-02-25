import styled from 'styled-components'

export const WrapperMain = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;
  align-items: start;
  overflow: hidden;

  background-color: ${(props) => props.theme.colors.Branco};
  z-index: 1;
`
export const ContentMain = styled.main`
  width: 100%;

  display: grid;
  place-items: center;
  align-items: start;
  gap: 6rem;
  padding: 10rem 0;
`
