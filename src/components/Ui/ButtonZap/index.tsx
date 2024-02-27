import styled from "styled-components"

interface PropsButton {
  text: string
  link: string
}

export default function ButtonZap({ text, link }: PropsButton) {
  return <Button href={link} target="_blank">{text}</Button>
}

const Button = styled.a`
  background-color: #25D366;
  color: white;
  padding: 1rem 2rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
`