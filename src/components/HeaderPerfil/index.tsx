import {
  HeaderPerfilBar,
  HeaderPerfilLogo,
  HeaderPerfillogo2,
  HeaderPerfilLogo3
} from "./styles"

import fundo from "../../assets/imagem/fundo (3).png"
import Restaurante from "../../assets/imagem/Restaurantes (1).png"
import logo from "../../assets/imagem/logo (1).png"
import Produto from "../../assets/imagem/0 produto(s) no carrinho (1).png"

const HeaderPerfil = () => (
  <HeaderPerfilBar>
    <img src={fundo} alt="" />
    <div className="container">
      <HeaderPerfillogo2>
        <img src={Restaurante} alt="" />
      </HeaderPerfillogo2>
      <HeaderPerfilLogo>
        <img src={logo} alt="" />
      </HeaderPerfilLogo>
      <HeaderPerfilLogo3>
        <img src={Produto} alt="" />
      </HeaderPerfilLogo3>
    </div>
  </HeaderPerfilBar>
)
export default HeaderPerfil
