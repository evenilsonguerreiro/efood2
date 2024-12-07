/* eslint-disable react/react-in-jsx-scope */

import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import image from '../../assets/imagem/image 3 (3).png'
import { useState } from 'react'

import {
  BarraLateral,
  Campo,
  CampoMedio,
  Complemento,
  DivButtom,
  DivCep,
  Endereco,
  Overlay,
  SubTitulo,
  TituloEntrega
} from './styles'
import { CardButton } from '../../components/Product2/styles'
import { Link } from 'react-router-dom'
import { Content } from '../PerfilModal/styles'
import Cardapio from '../../models/Cardapio'
import ProductList2 from '../../components/ProductList2'

export const italiano: Cardapio[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho',
    image: image
  }
]

const PerfilEntrega = () => {
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
              <TituloEntrega>Entrega</TituloEntrega>
              <SubTitulo>Quem irá receber</SubTitulo>
              <Campo>João Paulo de Souza</Campo>
              <Endereco>Endereço</Endereco>
              <Campo></Campo>
              <Endereco>Cidade</Endereco>
              <Campo> </Campo>
              <DivCep>
                <div>
                  <Endereco>CEP</Endereco>
                  <CampoMedio></CampoMedio>
                </div>
                <div>
                  <Endereco>Número</Endereco>
                  <CampoMedio></CampoMedio>
                </div>
              </DivCep>
              <Complemento>Complemento (opcional)</Complemento>
              <Campo></Campo>

              <DivButtom>
                <CardButton>
                  <Link className="link" to="/perfilPagamento">
                    Continuar com o pagamento
                  </Link>
                </CardButton>

                {/* Novo botão abaixo */}
                <CardButton>
                  <Link className="link" to="/perfilcarrinho">
                    Valtar para o carrinho
                  </Link>
                </CardButton>
              </DivButtom>
            </BarraLateral>
          </Content>
        </Overlay>
      )}
    </>
  )
}

export default PerfilEntrega
