/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import {
  Card2,
  CardButton,
  CardDescricao2,
  CardImg,
  CardTitle2
} from './styles'

type ButtonProps = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  title: string
  image: string
  description: string
  button: ButtonProps[]
}

const Product2 = ({ title, image, description, button }: Props) => (
  <Card2>
    <CardImg>
      <img src={image} />
      <CardTitle2>{title}</CardTitle2>
      <CardDescricao2>{description}</CardDescricao2>
      <div>
        {button.map((item, index) => (
          <CardButton key={index}>
            <Link className="link" to="/perfilmodal">
              {item.nome}
            </Link>
          </CardButton>
        ))}
      </div>
    </CardImg>
  </Card2>
)

export default Product2
