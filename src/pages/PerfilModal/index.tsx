/* eslint-disable react/react-in-jsx-scope */
import Footer from "../../components/Footer"
import HeaderPerfil from "../../components/HeaderPerfil"
import Hero from "../../components/Hero"
import ProductList2 from "../../components/ProductList2"
import Cardapio from "../../models/Cardapio"

import image from "../../assets/imagem/image 3 (3).png"
import { useState } from "react"

import {
  Content,
  Descricao,
  ModalFundo,
  ModalSpan,
  ModalTitle,
  Overlay
} from "./styles"

import carrinho from "../../assets/imagem/carrinho.png"
import { CardButton } from "../../components/Product2/styles"
import { Link } from "react-router-dom"
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

const PerfilModal = () => {
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
            <div className="container">
              <ModalFundo>
                <div>
                  <img src={carrinho} alt="" />
                </div>
                <div>
                  <ModalTitle>Pizza Marguerita</ModalTitle>
                  <Descricao>
                    A pizza Margherita é uma pizza clássica da culinária
                    italiana, reconhecida por sua simplicidade e sabor
                    inigualável. Ela é feita com uma base de massa fina e
                    crocante, coberta com molho de tomate fresco, queijo
                    mussarela de alta qualidade, manjericão fresco e azeite de
                    oliva extra-virgem. A combinação de sabores é perfeita, com
                    o molho de tomate suculento e ligeiramente ácido, o queijo
                    derretido e cremoso e as folhas de manjericão frescas, que
                    adicionam um toque de sabor herbáceo. É uma pizza simples,
                    mas deliciosa, que agrada a todos os paladares e é uma ótima
                    opção para qualquer ocasião.
                  </Descricao>
                  <ModalSpan>Serve: de 2 a 3 pessoas</ModalSpan>
                  <CardButton>
                    <Link className="link" to="/perfilcarrinho">
                      Adicionar ao carrinho - R$ 60,90
                    </Link>
                  </CardButton>
                </div>
              </ModalFundo>
            </div>
          </Content>
        </Overlay>
      )}
    </>
  )
}

export default PerfilModal
