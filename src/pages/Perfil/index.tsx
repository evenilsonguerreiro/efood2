/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2, {
  Cardapio,
  ItemCardapio
} from '../../components/ProductList2'
import Footer from '../../components/Footer'
import {
  ButtonModal,
  CloseModal,
  ConteudoModal,
  DescricaoModal,
  ImagemModal,
  Modal,
  TituloModal
} from './styles'
import close from '../../assets/imagem/close 1.png'
import { Link } from 'react-router-dom'

// 👇 Exportando o tipo Cardapio para uso em outros arquivos
export type { Cardapio }

export const Perfil = () => {
  const [itemSelecionado, setItemSelecionado] = useState<ItemCardapio | null>(
    null
  )
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [italiano, setItaliano] = useState<Cardapio[]>([])
  const [heroData, setHeroData] = useState({
    image: '',
    title: '',
    subtitle: ''
  })

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => {
        setItaliano(data)
        if (data.length > 0) {
          const restaurant = data[0] // Captura o primeiro restaurante da lista
          setHeroData({
            image: restaurant.capa,
            title: 'Italiana',
            subtitle: restaurant.titulo
          })
        }
      })
      .catch((error) => console.error('Erro ao buscar dados da API:', error))
  }, [])

  // Função para abrir o modal com as informações do item
  const abrirModal = (item: ItemCardapio) => {
    setItemSelecionado(item)
    setModalEstaAberto(true)
  }

  // Função para fechar o modal
  const fecharModal = () => setModalEstaAberto(false)

  return (
    <>
      <HeaderPerfil />
      <Hero
        image={heroData.image}
        title={heroData.title}
        subtitle={heroData.subtitle}
      />

      <ProductList2 cardapios={italiano} abrirModal={abrirModal} />
      <Footer className="footer-perfil" />

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <div className="container">
          <ConteudoModal>
            {itemSelecionado && (
              <>
                <ImagemModal>
                  <img src={itemSelecionado.foto} alt={itemSelecionado.nome} />
                </ImagemModal>
                <TituloModal>
                  <h2>{itemSelecionado.nome}</h2>
                </TituloModal>
                <CloseModal onClick={fecharModal}>
                  <img src={close} alt="Fechar" />
                </CloseModal>
                <DescricaoModal>
                  <p>{itemSelecionado.descricao}</p>
                  <p>{itemSelecionado.porcao}</p>
                </DescricaoModal>
                <ButtonModal>
                  <Link className="link" to="/perfilEntrega">
                    Adicionar ao carrinho
                  </Link>
                </ButtonModal>
              </>
            )}
          </ConteudoModal>
        </div>
        <div className="overlay" onClick={fecharModal}></div>
      </Modal>
    </>
  )
}

export default Perfil
