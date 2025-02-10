/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { FooterBar, FooterDescricao, FooterIcones, FooterLogo } from './styles'
import logo from '../../assets/imagem/logo (1).png'
import instagran from '../../assets/imagem/instagram-round-svgrepo-com (1) 1.png'
import Group from '../../assets/imagem/Group.png'
import Vector from '../../assets/imagem/Vector.png'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <FooterBar className={className}>
    <FooterLogo>
      <img src={logo} alt="logo" />
    </FooterLogo>
    <FooterIcones>
      <img src={instagran} alt="instagran" />
      <img src={Group} alt="facebook" />
      <img src={Vector} alt="whatsapp" />
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
