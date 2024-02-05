import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { Sidebar } from './typeSidebar'

export const WrapperSidebar = styled.nav`
  width: 100vw;
  min-height: auto;
  display: grid;
  padding: 2rem;
  place-items: center;

  background: ${(props) => props.theme.colors.Azul};
  z-index: 2;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 0 2rem;
  }

  animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  -webkit-animation: fade-in 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
export const LogoBranding = styled(Image)`
  width: 16rem;
  height: auto;
  filter: invert(1);
`
export const ContentSidebar = styled.main`
  width: 100%;
  max-width: 108rem;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const BlockSidebar = styled.div`
  width: auto;
  display: grid;
  place-items: end;
`
export const InnerBlockSidebar = styled.div`
  width: auto;
  display: grid;
  place-items: end;
`
export const BlockLinksSidebar = styled.div<Sidebar>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 3rem;
  padding: 2rem;
  z-index: 8;
  position: absolute;
  left: ${({ active }) => (active ? '0' : '-100%')};
  top: 0;
  transition: left 0.2s ease-in;
  -webkit-transition: left 0.2s ease-in-out;
  background: ${(props) => props.theme.colors.Azul};

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: static;
    min-height: 0;
    background: none;
    flex-direction: row;
    -ms-flex-direction: row;
  }
`
export const LinksSidebar = styled(Link)`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Branco};
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &::first-letter {
    text-transform: capitalize;
  }
`
export const ControlHamburger = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  z-index: 9;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: none;
  }
`
export const RowHamburger = styled.div<Sidebar>`
  width: 2.3rem;
  height: 0.2rem;
  background: ${(props) => props.theme.colors.Branco};
  position: relative;
  transform: ${(props) => (props.active ? 'rotate(45deg)' : 'none')};
  border-radius: 0.2rem;
  transition: transform 0.2s ease;
  -webkit-transition: -webkit-transform 0.2s ease;
  z-index: 6;

  &:nth-child(-n + 2) {
    display: ${(props) => (props.active ? 'none' : 'block')};
  }

  &:before,
  &:after {
    content: '';
    width: 2.3rem;
    height: 0.2rem;
    background: ${(props) => props.theme.colors.Branco};
    position: absolute;
  }
  &:before {
    transform: ${(props) => (props.active ? 'rotate(-90deg)' : 'none')};
    transition: transform 0.2s ease;
    -webkit-transition: -webkit-transform 0.2s ease;
  }
  &:after {
    transform: ${(props) => (props.active ? 'rotate(90deg)' : 'none')};
    transition: transform 0.2s ease;
    -webkit-transition: -webkit-transform 0.2s ease;
  }
`
