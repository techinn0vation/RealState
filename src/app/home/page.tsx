import { Hero, MainPage, CustomHead } from 'components/GeralComponents'

export default function Home() {
  // Configuração Head customizado
  const title = 'Assessoria e gestão imobiliária'
  const description =
    'Transformando sonhos em moradias com excelência e dedicação'
  const imageUrl = 'assets/img/icon.webp'
  const pageUrl = ''

  return (
    <>
      {/*Head Customizado Pagina Inicial */}
      <CustomHead
        title={title}
        description={description}
        image={imageUrl}
        url={pageUrl}
      />

      {/*Componentes Pagina Inicial  */}
      <Hero />
      <MainPage />
    </>
  )
}
