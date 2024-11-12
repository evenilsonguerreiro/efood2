/* eslint-disable react/react-in-jsx-scope */
import Footer from "../../components/Footer"
import HeaderPerfil from "../../components/HeaderPerfil"
import Hero from "../../components/Hero"
import ProductList2 from "../../components/ProductList2"
import Cardapio from "../../models/Cardapio"

import image from "../../assets/imagem/image 3 (3).png"
import produto1 from "../../assets/imagem/produto1.png"
import { useState } from "react"

import { BarraLateral, Content, Overlay, Precos } from "./styles"
import { CardButton } from "../../components/Product2/styles"

const italiano: Cardapio[] = [
  {
    id: 1,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  },
  {
    id: 2,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  },
  {
    id: 3,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  },
  {
    id: 4,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  },
  {
    id: 5,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  },
  {
    id: 6,
    title: "Pizza Marguerita",
    description:
      "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    button: "Adicionar ao carrinho",
    image: image
  }
]

const PerfilCarrinho = () => {
  const [showOverlay, setShowOverlay] = useState(true)

  const handleClose = () => {
    setShowOverlay(false)
  }

  return (
    <>
      <HeaderPerfil />
      <Hero />
      <ProductList2 cardapios={italiano} />
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
              <CardButton>Continuar com a entrega</CardButton>
            </BarraLateral>
          </Content>
        </Overlay>
      )}
    </>
  )
}

export default PerfilCarrinho
