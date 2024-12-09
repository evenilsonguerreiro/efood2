/* eslint-disable react/react-in-jsx-scope */
import { HeroBar } from './styles'
import hero from '../../assets/imagem/hero.png'

const Hero = () => (
  <HeroBar>
    <img src={hero} alt="imagem apresentação" />
    <div className="container">
      <div className="text-overlay">
        <p>Italiana</p>
        <span>La Dolce Vita Trattoria</span>
      </div>
    </div>
  </HeroBar>
)

export default Hero
