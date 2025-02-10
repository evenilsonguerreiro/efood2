/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
import Footer from '../../components/Footer'

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
        // Usar o primeiro restaurante para preencher o Hero
        if (data.length > 0) {
          const restaurant = data[0] // Captura o primeiro restaurante da lista
          setHeroData({
            image: restaurant.capa, // URL da imagem do restaurante
            title: 'Italiana', // Título da cozinha ou tipo do restaurante
            subtitle: restaurant.titulo // Subtítulo sendo o nome do restaurante (ex: "Bella Tovora Italiana")
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
        title={heroData.title} // Agora, título é fixo como 'Italiana'
        subtitle={heroData.subtitle} // Agora, o subtítulo é o nome do restaurante
      />
      <ProductList2 cardapios={italiano} />
      <Footer className="footer-perfil" />
    </>
  )
}

export default Perfil
