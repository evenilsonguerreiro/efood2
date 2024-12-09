/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import HeaderPerfil from '../../components/HeaderPerfil'
import Hero from '../../components/Hero'
import ProductList2 from '../../components/ProductList2'
import { italiano } from '../PerfilModal'

export type Cardapio = {
  id: number
  title: string
  description: string
  button: string
  image: string
}

export const Perfil = () => {
  const[cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setCardapio(res))
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
