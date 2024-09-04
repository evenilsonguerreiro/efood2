import { HeaderBar, HeaderLogo, HeaderDescricao } from "./styles"

import fundo from "../../assets/imagem/fundo.png"
import logo from "../../assets/imagem/logo (1).png"

const Header = () => (
  <HeaderBar>
    <img src={fundo} alt="fundo" />
    <HeaderLogo>
      <img src={logo} alt="logo" />
    </HeaderLogo>
    <HeaderDescricao>
      <div>Viva experiências gastronômica no conforto da sua casa</div>
    </HeaderDescricao>
  </HeaderBar>
)
export default Header
