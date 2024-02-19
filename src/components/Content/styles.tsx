import styled from 'styled-components'

export const WrapperContent = styled.section`
  width: 100%;
  min-height: 100vh;

  display: grid;
  place-items: center;
  align-items: start;
  background-color: ${(props) => props.theme.colors.Branco};
  padding-bottom: 9rem;
  z-index: 1;
`
