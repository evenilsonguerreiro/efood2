import Product from "../Product"
import { Container, List } from "./styles"
import Comidas from "../../models/Comidas"

export type Props = {
  title?: string
  comidas: Comidas[]
}

const ProductList = ({ comidas }: Props) => (
  <Container>
    <div className="container">
      <List>
        {comidas.map((comida: Comidas) => (
          <Product
            key={comida.id}
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
