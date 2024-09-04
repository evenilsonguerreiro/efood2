class Comidas {
  image: string
  title: string
  description: string
  infos: string[]
  button: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    infos: string[],
    button: string
  ) {
    this.id = id
    this.image = image
    this.title = title
    this.description = description
    this.infos = infos
    this.button = button
  }
}
export default Comidas
