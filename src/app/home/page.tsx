import CustomHead from 'components/CustomHead'
import { Hero, Content } from 'components/GeralComponents'

export default function Home() {
  // Configuração Head customizado
  const title = 'Grupo gestão empreendimentos'
  const imageUrl = 'assets/img/Logo.webp'
  const description =
    'Transformando sonhos em moradias com excelência e dedicação.'
  const pageUrl = 'lp.grupogestaoempreendimentos.com.br'

  return (
    <>
      {/* Head Customizado Pagina Inicial */}
      <CustomHead
        title={title}
        image={imageUrl}
        description={description}
        url={pageUrl}
      />

      {/* Componentes */}
      <Hero />
      <Content />
    </>
  )
}
