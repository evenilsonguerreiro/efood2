/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/react-in-jsx-scope */
import Product from '../Product'
import { Comidas } from '../../pages/Home'
import { List } from './styles'

export type Props = {
  comidas: Comidas[]
}

const ProductList = ({ comidas }: Props) => (
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
)

export default ProductList
