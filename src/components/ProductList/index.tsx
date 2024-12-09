/* eslint-disable react/react-in-jsx-scope */
import Product from '../Product'
import { Container, List } from './styles'

export interface Comidas {
  id: number
  titulo: string
  descricao: string
  capa: string
  cardapio: Array<{
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }>
}

export type Props = {
  title?: string
  comidas: Comidas[]
}


const ProductList = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida, index) => (
          <Product
            key={comida.id || index}
            title={comida.titulo}
            description={comida.descricao}
            image={comida.capa}
            infos={comida.cardapio.map(item => item.nome)}
            button="Ver mais"
          />
        ))}
      </List>
    </div>
  </Container>
)


export default ProductList
