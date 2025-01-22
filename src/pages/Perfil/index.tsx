/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
import Footer2 from '../../components/Footer2'

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
          setHeroData({
            image: data[0].capa, // URL da imagem do restaurante
            title: data[0].titulo, // Exemplo: "Italiana"
            subtitle: data[0].descricao // Exemplo: "La Dolce Vita Trattoria"
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
      <Footer2 />
    </>
  )
}

export default Perfil
