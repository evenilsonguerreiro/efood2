/* eslint-disable react/react-in-jsx-scope */
import { HeaderBar, HeaderLogo, HeaderDescricao } from "./styles"

import fundo from "../../assets/imagem/fundo.png"
import logo from "../../assets/imagem/logo (1).png"

const Header = () => (
  <HeaderBar>
    <img src={fundo} alt="Fundo decorativo" />
    <HeaderLogo>
      <img src={logo} alt="Logo do restaurante" />
    </HeaderLogo>
    <HeaderDescricao>
      <div>Viva experiências gastronômicas no conforto da sua casa</div>
    </HeaderDescricao>
  </HeaderBar>
)

export default Header
