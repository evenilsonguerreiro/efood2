/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { limitarDescricao } from '../../utils/utils'
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
  abrirModal: () => void // Adicionamos aqui
}

const Product2 = ({ title, image, description, button, abrirModal }: Props) => (
  <>
    {button.map((item, index) => (
      <div className="container2" key={index}>
        <Card2>
          <CardImg>
            <img src={item.foto} alt={item.nome} />
          </CardImg>
          <CardTitle2>{item.nome}</CardTitle2>
          <CardDescricao2>
            {limitarDescricao(item.descricao, 250)}
          </CardDescricao2>
          <CardButton onClick={abrirModal}>Adicionar ao carrinho </CardButton>
        </Card2>
      </div>
    ))}
  </>
)

export default Product2
