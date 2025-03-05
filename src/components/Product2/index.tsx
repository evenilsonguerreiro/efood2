/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  <>
    {button.map((item, index) => (
      <div className="container">
        <Card2 key={index}>
          <CardImg>
            {/* A imagem do prato agora é a imagem principal do card */}
            <img src={item.foto} alt={item.nome} />
          </CardImg>

          {/* Informações do prato */}
          <CardTitle2>{item.nome}</CardTitle2>
          <CardDescricao2>{item.descricao}</CardDescricao2>

          <CardButton>
            <Link className="link" to="/perfilmodal">
              Adicionar ao carrinho
            </Link>
          </CardButton>
        </Card2>
      </div>
    ))}
  </>
)

export default Product2
