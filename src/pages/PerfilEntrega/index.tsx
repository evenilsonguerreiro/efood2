/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import image from '../../assets/imagem/image 3 (2).png'
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
import { Content } from '../PerfilEntrega/styles'
import ProductList2 from '../../components/ProductList2'
import { Cardapio } from '../Perfil'

// Corrigido para garantir a consistência com a estrutura de Cardapio

export const italiano: Cardapio[] = [
  {
    id: 1,
    titulo: 'Pizza Marguerita', // Corrigido para 'titulo'
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    cardapio: [
      {
        foto: image,
        preco: 25.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Pizza deliciosa!',
        porcao: 'Média',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
  {
    id: 2,
    titulo: 'Pizza Calabresa', // Corrigido para 'titulo'
    descricao:
      'Pizza de calabresa com cebola, muito saborosa e ideal para quem adora um toque picante!',
    cardapio: [
      {
        foto: image,
        preco: 28.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Calabresa saborosa!',
        porcao: 'Grande',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
  {
    id: 3,
    titulo: 'Pizza 4 Queijos', // Corrigido para 'titulo'
    descricao:
      'A pizza clássica de 4 queijos, com muçarela, parmesão, gorgonzola e provolone.',
    cardapio: [
      {
        foto: image,
        preco: 35.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Quatro queijos irresistíveis!',
        porcao: 'Média',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
  {
    id: 4,
    titulo: 'Pizza de Frango com Catupiry', // Corrigido para 'titulo'
    descricao:
      'Pizza de frango com catupiry, uma combinação perfeita de cremosidade e sabor!',
    cardapio: [
      {
        foto: image,
        preco: 30.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Frango com catupiry!',
        porcao: 'Grande',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
  {
    id: 5,
    titulo: 'Pizza de Frutos do Mar', // Corrigido para 'titulo'
    descricao:
      'Pizza com camarões frescos, mariscos e um toque de limão siciliano.',
    cardapio: [
      {
        foto: image,
        preco: 40.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Frutos do mar!',
        porcao: 'Média',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
  {
    id: 6,
    titulo: 'Pizza Vegana', // Corrigido para 'titulo'
    descricao:
      'Pizza sem produtos de origem animal, com uma deliciosa combinação de legumes frescos.',
    cardapio: [
      {
        foto: image,
        preco: 32.0,
        nome: 'Adicionar ao carrinho',
        descricao: 'Pizza vegana deliciosa!',
        porcao: 'Média',
      },
    ],
    capa: image, // Corrigido para 'capa'
  },
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
                    Voltar para o carrinho
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
