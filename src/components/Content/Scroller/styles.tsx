import styled from 'styled-components'

import { motion } from 'framer-motion'

export const WrapperMotion = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: -10rem;
`
export const ContentMotion = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
`
export const TextMotion = styled.span`
  display: block;
  margin-right: 3rem;

  font-size: 6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 5.7rem;
  color: ${(props) => props.theme.colors.Preto};
  text-align: center;
  text-transform: uppercase;
`
