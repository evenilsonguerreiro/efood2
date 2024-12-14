/* eslint-disable react/react-in-jsx-scope */
import Product2 from '../Product2';
import { Container } from '../ProductList/styles';
import { List2 } from './styles';

export interface ItemCardapio {
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
}

export interface Cardapio {
  id: number;
  titulo: string;
  descricao: string;
  capa: string;
  cardapio: ItemCardapio[]; // Tipo corrigido para um array de objetos
}

export type Props = {
  cardapios: Cardapio[];
};

const ProductList2 = ({ cardapios }: Props) => (
  <Container>
    <div className="container">
      <List2>
        {cardapios.map((cardapio) => (
          <Product2
            key={cardapio.id}
            title={cardapio.titulo}
            image={cardapio.capa}
            description={cardapio.descricao}
            button={cardapio.cardapio}
          />
        ))}
      </List2>
    </div>
  </Container>
);

export default ProductList2;

