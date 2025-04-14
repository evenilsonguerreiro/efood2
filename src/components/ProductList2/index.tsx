/* eslint-disable react/react-in-jsx-scope */
import Product2 from '../Product2'
import { List2 } from './styles'

export interface ItemCardapio {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export interface Cardapio {
  id: number
  titulo: string
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

export type Props = {
  cardapios: Cardapio[]
  abrirModal: (item: ItemCardapio) => void // Função para abrir o modal com o item selecionado
}

const ProductList2 = ({ cardapios, abrirModal }: Props) => (
  <div className="container2">
    <List2>
      {cardapios.map((cardapio) => (
        <div key={cardapio.id}>
          {cardapio.cardapio.map((item) => (
            <Product2
              key={item.nome}
              title={cardapio.titulo}
              image={cardapio.capa}
              description={cardapio.descricao}
              button={[item]} // Passando o item individualmente para o Product2
              abrirModal={() => abrirModal(item)} // Passando a função para o Product2
            />
          ))}
        </div>
      ))}
    </List2>
  </div>
)

export default ProductList2
