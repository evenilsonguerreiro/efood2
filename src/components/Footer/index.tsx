/* eslint-disable react/react-in-jsx-scope */
import { FooterBar, FooterDescricao, FooterIcones, FooterLogo } from './styles'
import logo from '../../assets/imagem/logo (1).png'
import instagran from '../../assets/imagem/instagram-round-svgrepo-com (1) 1.png'
import Group from '../../assets/imagem/Group.png'
import Vector from '../../assets/imagem/Vector.png'

const Footer = () => (
  <FooterBar>
    <FooterLogo>
      <img src={logo} alt="logo" />
    </FooterLogo>
    <FooterIcones>
      <img src={instagran} alt="instagran" />
      <img src={Group} alt="faceboock" />
      <img src={Vector} alt="faceboock" />
    </FooterIcones>
    <FooterDescricao>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterDescricao>
  </FooterBar>
)
export default Footer
