/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/react-in-jsx-scope */
import Cardapio from '../../models/Cardapio'
import Product2 from '../Product2'
import { Container } from '../ProductList/styles'
import { List2 } from './styles'

export type Props = {
  cardapios: Cardapio[]
}

const ProductList2 = ({ cardapios }: Props) => (
  <Container>
    <div className="container">
      <List2>
        {cardapios.map((cardapio, index) => (
          <Product2
            key={cardapio.id || index}
            title={cardapio.title}
            image={cardapio.image}
            description={cardapio.description}
            button={cardapio.button}
          />
        ))}
      </List2>
    </div>
  </Container>
)
export default ProductList2
