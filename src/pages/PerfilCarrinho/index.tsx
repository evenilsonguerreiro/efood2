/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import produto1 from '../../assets/imagem/produto1.png'
import { useState } from 'react'
import { BarraLateral, Content, Overlay, Precos } from './styles'
import { CardButton } from '../../components/Product2/styles'
import { Link } from 'react-router-dom'
import ProductList2, { Cardapio } from '../../components/ProductList2'

// Mock temporário - remova quando for usar dados da API
const italiano: Cardapio[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cardapio: [
      {
        foto: produto1,
        preco: 25.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Pizza deliciosa!',
        porcao: 'Média'
      }
    ],
    capa: produto1
  }
  // Você pode adicionar mais pizzas aqui se quiser
]

const PerfilCarrinho = () => {
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
      <ProductList2 cardapios={italiano} abrirModal={() => {}} />
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

export default PerfilCarrinho
