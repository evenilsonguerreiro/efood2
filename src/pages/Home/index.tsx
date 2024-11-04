/* eslint-disable react/react-in-jsx-scope */
import Comidas from "../../models/Comidas"
import ProductList from "../../components/ProductList"

import imagem from "../../assets/imagem/imagem (1).png"
import image from "../../assets/imagem/image 1 (1).png"
import Footer from "../../components/Footer"

const promocoes: Comidas[] = [
  {
    id: 1,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["destaque", "Italiano"],
    button: "Saiba mais",
    image: imagem
  },
  {
    id: 2,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Italiano"],
    button: "Saiba mais",
    image: image
  },
  {
    id: 3,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Italiano"],
    button: "Saiba mais",
    image: image
  },
  {
    id: 4,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Italiano"],
    button: "Saiba mais",
    image: image
  },
  {
    id: 5,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Italiano"],
    button: "Saiba mais",
    image: image
  },
  {
    id: 6,
    title: "hioki sushi",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    infos: ["Italiano"],
    button: "Saiba mais",
    image: image
  }
]

const Home = () => (
  <>
    <header />
    <ProductList comidas={promocoes} />
    <Footer />
  </>
)
export default Home
