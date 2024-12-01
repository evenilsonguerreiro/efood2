/* eslint-disable react/react-in-jsx-scope */
import {
  HeaderPerfilBar,
  HeaderPerfilLogo,
  HeaderPerfillogo2,
  HeaderPerfilLogo3
} from './styles'

import logo from '../../assets/imagem/logo (1).png'

const HeaderPerfil = () => (
  <HeaderPerfilBar>
    <div className="containerPerfil">
      <HeaderPerfillogo2>
        <p>Restaurantes</p>
      </HeaderPerfillogo2>
      <HeaderPerfilLogo>
        <img src={logo} alt="imagem logo" />
      </HeaderPerfilLogo>
      <HeaderPerfilLogo3>
        <p>0 produto(s) no carrinho</p>
      </HeaderPerfilLogo3>
    </div>
  </HeaderPerfilBar>
)
export default HeaderPerfil
