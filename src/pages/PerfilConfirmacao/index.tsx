/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import image from '../../assets/imagem/image 3 (2).png'
import produto1 from '../../assets/imagem/produto1.png'
import { useState } from 'react'
import { BarraLateral, Content, Overlay, Precos } from './styles'
import { CardButton } from '../../components/Product2/styles'
import { Link } from 'react-router-dom'
import ProductList2 from '../../components/ProductList2'
import { Cardapio } from '../Perfil'

export const italiano: Cardapio[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cardapio: [
      {
        foto: image,
        preco: 25.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Pizza deliciosa!',
        porcao: 'Média'
      }
    ],
    capa: image
  },
  {
    id: 2,
    titulo: 'Pizza Calabresa',
    descricao:
      'Pizza de calabresa com cebola, muito saborosa e ideal para quem adora um toque picante!',
    cardapio: [
      {
        foto: image,
        preco: 28.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Calabresa saborosa!',
        porcao: 'Grande'
      }
    ],
    capa: image
  },
  {
    id: 3,
    titulo: 'Pizza 4 Queijos',
    descricao:
      'A pizza clássica de 4 queijos, com muçarela, parmesão, gorgonzola e provolone.',
    cardapio: [
      {
        foto: image,
        preco: 35.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Quatro queijos irresistíveis!',
        porcao: 'Média'
      }
    ],
    capa: image
  },
  {
    id: 4,
    titulo: 'Pizza de Frango com Catupiry',
    descricao:
      'Pizza de frango com catupiry, uma combinação perfeita de cremosidade e sabor!',
    cardapio: [
      {
        foto: image,
        preco: 30.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Frango com catupiry!',
        porcao: 'Grande'
      }
    ],
    capa: image
  },
  {
    id: 5,
    titulo: 'Pizza de Frutos do Mar',
    descricao:
      'Pizza com camarões frescos, mariscos e um toque de limão siciliano.',
    cardapio: [
      {
        foto: image,
        preco: 40.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Frutos do mar!',
        porcao: 'Média'
      }
    ],
    capa: image
  },
  {
    id: 6,
    titulo: 'Pizza Vegana',
    descricao:
      'Pizza sem produtos de origem animal, com uma deliciosa combinação de legumes frescos.',
    cardapio: [
      {
        foto: image,
        preco: 32.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Pizza vegana deliciosa!',
        porcao: 'Média'
      }
    ],
    capa: image
  }
]

const PerfilConfirmacao = () => {
  const [showOverlay, setShowOverlay] = useState(true)

  const handleClose = () => {
    setShowOverlay(false)
  }

  return (
    <>
      <HeaderPerfil />
      {italiano.length > 0 && (
        <Hero
          image={italiano[0].capa}
          title="Italiana"
          subtitle={italiano[0].titulo}
        />
      )}

      <ProductList2
        cardapios={italiano}
        abrirModal={() => {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
        }}
      />

      <Footer />
      {showOverlay && (
        <Overlay>
          <Content onClick={handleClose}>
            <BarraLateral>
              <img className="img1" src={produto1} alt="" />
              <img className="img2" src={produto1} alt="" />
              <img className="img3" src={produto1} alt="" />
              <Precos>
                <h4>Valor total</h4>
                <span>R$ 178,90</span>
              </Precos>
              <CardButton>
                <Link className="link" to="/perfilEntrega">
                  Continuar com a entrega
                </Link>
              </CardButton>
            </BarraLateral>
          </Content>
        </Overlay>
      )}
    </>
  )
}
export default PerfilConfirmacao
