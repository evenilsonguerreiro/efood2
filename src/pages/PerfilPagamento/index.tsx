/* eslint-disable react/react-in-jsx-scope */

import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
import Cardapio from '../../models/Cardapio'

import image from '../../assets/imagem/image 3 (3).png'
import { useState } from 'react'

import {
  BarraLateral,
  Campo,
  Endereco,
  Overlay,
  SubTitulo,
  TituloEntrega,
  Campo1,
  Campo2,
  DivCartao,
  CampoMedio,
  Complemento,
  DivButtom,
  Endereco2
} from './styles'
import { Content } from '../PerfilModal/styles'
import { DivCep } from '../PerfilEntrega/styles'
import { Link } from 'react-router-dom'
import { CardButton } from '../../components/Product2/styles'

const italiano: Cardapio[] = [
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

const PerfilPagamento = () => {
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
              <TituloEntrega>Pagamento - Valor a pagar R$ 190,90</TituloEntrega>
              <SubTitulo>Nome no cartão</SubTitulo>
              <Campo>João Paulo de Souza</Campo>
              <DivCartao>
                <div>
                  <Endereco>Número do cartão</Endereco>
                  <Campo1></Campo1>
                </div>
                <div>
                  <Endereco>CVV</Endereco>
                  <Campo2> </Campo2>
                </div>
              </DivCartao>

              <DivCep>
                <div>
                  <Endereco2>Mês de vencimento</Endereco2>
                  <CampoMedio></CampoMedio>
                </div>
                <div>
                  <Endereco2>Ano de vencimento</Endereco2>
                  <CampoMedio></CampoMedio>
                </div>
              </DivCep>
              <Complemento>Complemento (opcional)</Complemento>
              <Campo></Campo>

              <DivButtom>
                <CardButton>
                  <Link className="link" to="/perfilConfirmacao">
                    Finalizar pagamento
                  </Link>
                </CardButton>

                {/* Novo botão abaixo */}
                <CardButton>
                  <Link className="link" to="/perfilcarrinho">
                    Voltar para a edição de endereço
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

export default PerfilPagamento
