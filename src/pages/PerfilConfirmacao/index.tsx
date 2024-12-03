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
  DivText,
  Overlay,
  SubTitulo,
  TituloEntrega
} from './styles'
import { CardButton } from '../../components/Product2/styles'
import { Link } from 'react-router-dom'
import { Content } from '../PerfilModal/styles'

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

const PerfilConfirmacao = () => {
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
              <TituloEntrega>Pedido realizado </TituloEntrega>
              <DivText>
                <SubTitulo>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido. Gostaríamos de ressaltar que nossos entregadores
                  não estão autorizados a realizar cobranças extras. Lembre-se
                  da importância de higienizar as mãos após o recebimento do
                  pedido, garantindo assim sua segurança e bem-estar durante a
                  refeição. Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite.
                </SubTitulo>
              </DivText>

              <CardButton>
                <Link className="link" to="">
                  Concluir
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
