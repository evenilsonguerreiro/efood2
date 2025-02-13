/* eslint-disable react/react-in-jsx-scope */
import { Link } from 'react-router-dom'
import { ButtonContainer } from '../Button/styles'
import Tag from '../Tag'
import { Card, Descricao, Fundo, Infos, Lista, Titulo } from './styles'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  button: string
}

const Product = ({ title, image, description, infos, button }: Props) => (
  <Lista>
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Fundo>
        <Titulo>{title}</Titulo>
        <Descricao>{description}</Descricao>
        <ButtonContainer>
          <Link className="link2" to="/perfil">
            {button}
          </Link>
        </ButtonContainer>
      </Fundo>
    </Card>
  </Lista>
)

export default Product
