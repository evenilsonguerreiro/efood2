/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import { Container, List } from './styles'
import Product from '../Product'
import { Comidas } from '../../pages/Home'

export type Props = {
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
            infos={index === 0 ? ['Destaque', comida.tipo] : [comida.tipo]}
            button="Ver mais"
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductList
