/* eslint-disable react/react-in-jsx-scope */
import Product from '../Product'
import { Container, List } from './styles'
import Comidas from '../../models/Comidas'

export type Props = {
  title?: string
  comidas: Comidas[]
}

const ProductList = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida: Comidas, index) => (
          <Product
            key={comida.id || index}
            title={comida.title}
            description={comida.description}
            image={comida.image}
            button={comida.button}
            infos={comida.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
