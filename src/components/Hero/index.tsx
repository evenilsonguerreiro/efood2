/* eslint-disable react/react-in-jsx-scope */
import { HeroBar } from "./styles"

import apresentacao from "../../assets/imagem/apresentacao.png"

const Hero = () => (
  <HeroBar>
    <img src={apresentacao} alt="imagem aresentacao" />
  </HeroBar>
)
export default Hero
