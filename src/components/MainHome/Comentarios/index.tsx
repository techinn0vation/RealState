import Headline from 'components/Ui/Headline'

import {
  BlockCardsServicos,
  BodyCardServicos,
  ContentServicos,
  FrameComentarios,
  FrameHeaderServicos,
  HeaderCardServicos,
  InnerCardServicos,
  InnerFrameServicos,
  ViewServicos,
  WrapperServicos
} from './styles'

import Douglas from 'assets/img/Douglas.webp'
import Elisa from 'assets/img/Elisa.webp'
import Gabriel from 'assets/img/Gabriel.webp'
import Gabriela from 'assets/img/Gabriela.webp'
import Jerfferson from 'assets/img/Jefferson.webp'
import Sandra from 'assets/img/Sandra.webp'

export default function Comentarios() {
  return (
    <WrapperServicos>
      <ContentServicos>
        <Headline
          title='nossos clientes'
          text='veja abaixo alguns comentários de nossos clientes.'
        />
        <ViewServicos>
          <BlockCardsServicos>
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Douglas}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='roberto'
                  text='serviço impecável! A equipe demonstrou profissionalismo e eficiência, superando minhas expectativas.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Elisa}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='julía'
                  text='atendimento excepcional! Rápidos, confiáveis e sempre prontos para resolver qualquer problema.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Gabriel}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='emanuel'
                  text='inovação constante! Suas soluções inteligentes tornaram minha experiência incrivelmente conveniente e eficaz.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
          </BlockCardsServicos>
          {/*  */}
          <BlockCardsServicos>
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Sandra}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='roberto'
                  text='serviço impecável! A equipe demonstrou profissionalismo e eficiência, superando minhas expectativas.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Gabriela}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='julía'
                  text='atendimento excepcional! Rápidos, confiáveis e sempre prontos para resolver qualquer problema.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
            <InnerCardServicos>
              <HeaderCardServicos>
                <FrameHeaderServicos>
                  <InnerFrameServicos>
                    <FrameComentarios
                      src={Jerfferson}
                      alt='comentarios'
                      priority={true}
                    />
                  </InnerFrameServicos>
                </FrameHeaderServicos>
              </HeaderCardServicos>
              {/*  */}
              <BodyCardServicos>
                <Headline
                  title='emanuel'
                  text='inovação constante! Suas soluções inteligentes tornaram minha experiência incrivelmente conveniente e eficaz.'
                />
              </BodyCardServicos>
            </InnerCardServicos>
            {/*  */}
          </BlockCardsServicos>
          {/*  */}
        </ViewServicos>
      </ContentServicos>
    </WrapperServicos>
  )
}
