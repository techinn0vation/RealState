interface PropText {
  title: string
}

export default function DisplayTitle({ title }: PropText) {
  return <h1>{title}</h1>
}
