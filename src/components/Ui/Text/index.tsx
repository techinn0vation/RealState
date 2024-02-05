interface PropText {
  text: string
}

export default function DisplayText({ text }: PropText) {
  return <p>{text}</p>
}
