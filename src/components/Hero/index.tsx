/* eslint-disable react/react-in-jsx-scope */
import { HeroBar } from './styles'

type HeroProps = {
  image: string // URL da imagem
  title: string // Título principal (ex.: "Italiana")
  subtitle: string // Subtítulo (ex.: "La Dolce Vita Trattoria")
}

const Hero = ({ image, title, subtitle }: HeroProps) => (
  <HeroBar>
    <img src={image} alt="Imagem de apresentação" />
    <div>
      <div className="text-overlay">
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </div>
  </HeroBar>
)

export default Hero
