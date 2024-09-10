import {
  Card2,
  CardButton,
  CardDescricao2,
  CardImg,
  CardTitle2
} from "./styles"

type Props = {
  title: string
  image: string
  description: string
  button: string
}

const Product2 = ({ title, image, description, button }: Props) => (
  <Card2>
    <CardImg>
      <img src={image} />
      <CardTitle2>{title}</CardTitle2>
      <CardDescricao2>{description}</CardDescricao2>
      <CardButton>{button}</CardButton>
    </CardImg>
  </Card2>
)
export default Product2
