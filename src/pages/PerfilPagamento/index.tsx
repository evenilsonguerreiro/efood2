/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import image from '../../assets/imagem/image 3 (2).png'
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

const PerfilPagamento = () => {
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
          title={italiano[0].titulo}
          subtitle={italiano[0].descricao}
        />
      )}
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
