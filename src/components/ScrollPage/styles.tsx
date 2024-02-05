import styled from 'styled-components'

export const WrapperScroll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(240, 163, 10, 1) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(240, 163, 10, 1) 100%
  );
  transition: width 0.2s ease-in-out;
  z-index: 3;
`
