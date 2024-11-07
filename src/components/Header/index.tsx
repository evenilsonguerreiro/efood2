/* eslint-disable react/react-in-jsx-scope */
import { HeaderBar, HeaderLogo, HeaderDescricao } from "./styles"

import logo from "../../assets/imagem/logo (1).png"

const Header = () => (
  <HeaderBar>
    <HeaderLogo>
      <img src={logo} alt="Logo do restaurante" />
    </HeaderLogo>
    <HeaderDescricao>
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </HeaderDescricao>
  </HeaderBar>
)

export default Header
