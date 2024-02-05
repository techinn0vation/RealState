import DisplayText from '../Text'
import DisplayTitle from '../Title'
import { WrapperHeadline } from './styles'

interface PropsText {
  title: string
  text: string
}

export const Headline = ({ title, text }: PropsText) => {
  return (
    <WrapperHeadline>
      <DisplayTitle title={title} />
      <DisplayText text={text} />
    </WrapperHeadline>
  )
}
