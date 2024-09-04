import { FooterBar, FooterDescricao, FooterIcones, FooterLogo } from "./styles"

import Rectangle from "../../assets/imagem/Rectangle 2.png"
import logo from "../../assets/imagem/logo (1).png"
import instagran from "../../assets/imagem/instagram-round-svgrepo-com (1) 1.png"
import Group from "../../assets/imagem/Group.png"
import Vector from "../../assets/imagem/Vector.png"
import effod from "../../assets/imagem/A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado..png"

const Footer = () => (
  <FooterBar>
    <img src={Rectangle} alt="" />
    <FooterLogo>
      <img src={logo} alt="" />
    </FooterLogo>
    <FooterIcones>
      <img src={instagran} alt="" />
      <img src={Group} alt="" />
      <img src={Vector} alt="" />
    </FooterIcones>
    <FooterDescricao>
      <img src={effod} alt="" />
    </FooterDescricao>
  </FooterBar>
)
export default Footer
