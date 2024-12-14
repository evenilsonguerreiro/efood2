/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import ProductList from '../../components/ProductList'

export interface Comidas {
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

const Home = () => {
  const [promocoes, setPromocoes] = useState<Comidas[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  return (
    <>
      <header />
      <ProductList comidas={promocoes} />
      <Footer />
    </>
  )
}

export default Home
