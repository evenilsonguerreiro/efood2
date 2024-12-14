/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'

export interface Cardapio {
  id: number
  titulo: string
  descricao: string
  capa: string
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

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setItaliano(data))
      .catch((error) => console.error('Erro ao buscar dados da API:', error)) // Tratamento de erro
  }, [])

  return (
    <>
      <HeaderPerfil />
      <Hero />
      <ProductList2 cardapios={italiano} />
      <Footer />
    </>
  )
}

export default Perfil
