/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
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
import imagem from '../../assets/imagem/image 3.png'
import close from '../../assets/imagem/close 1.png'
import { Link } from 'react-router-dom'

export interface Cardapio {
  id: number
  titulo: string
  descricao: string
  capa: string // Imagem do restaurante
  cardapio: Array<{
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }>
}

export const Perfil = () => {
  const [modalEstarAberto, setModalEstarAberto] = useState(false)
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

  return (
    <>
      <HeaderPerfil />
      <Hero
        image={heroData.image}
        title={heroData.title}
        subtitle={heroData.subtitle}
      />
      <ProductList2 cardapios={italiano} />
      <Footer className="footer-perfil" />

      <Modal className={modalEstarAberto ? `visivel` : ''}>
        <div className="container">
          <ConteudoModal>
            <ImagemModal>
              <img src={imagem} alt="" />
            </ImagemModal>
            <TituloModal>
              <h2>Pizza Marguerita</h2>
            </TituloModal>
            <CloseModal>
              <img src={close} alt="Fechar" />
            </CloseModal>
            <DescricaoModal>
              <p>
                A pizza Margherita é uma pizza clássica da culinária italiana,
                reconhecida por sua simplicidade e sabor inigualável. com uma
                com uma base de massa fina e crocante, coberta com molho de
                fresco, queijo mussarela de alta qualidade, manjericão fresco e
                de oliva extra-virgem.
              </p>
              <p>Serve: de 2 a 3 pessoas.</p>
            </DescricaoModal>
            <ButtonModal>
              <Link className="link" to="/perfilEntrega">
                Adicionar ao carrinho
              </Link>
            </ButtonModal>
          </ConteudoModal>
        </div>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Perfil
