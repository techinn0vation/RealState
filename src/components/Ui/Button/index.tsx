import { ReactNode } from 'react'

import DisplayText from '../Text'

interface PropButton {
  text: string
  icon: ReactNode
  onClick?: () => void
}

export const Button = ({ text, icon, onClick }: PropButton) => {
  return (
    <button onClick={onClick}>
      <DisplayText text={text} />
      {icon}
    </button>
  )
}
