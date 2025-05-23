/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Infos, Fundo, Titulo, Descricao } from './styles'
import Tag from '../Tag'
import { ButtonContainer } from '../Button/styles'

type Props = {
  title: string
  image: string
  description: string
  infos: string[]
  button: string
}

const Product = ({ title, image, description, infos, button }: Props) => {
  const limitarDescricao = (descricao?: string, limite = 250) => {
    if (!descricao) {
      return '' // Retorna uma string vazia se não houver descrição
    }

    if (descricao.length <= limite) {
      return descricao // Retorna a descrição inteira se for menor ou igual ao limite
    } else {
      return descricao.slice(0, limite) + '...' // Se for maior que o limite, corta a descrição e adiciona '...'
    }
  }
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info, index) => (
          <Tag key={index}>{info}</Tag>
        ))}
      </Infos>
      <Fundo>
        <Titulo>{title}</Titulo>
        <Descricao>{limitarDescricao(description)}</Descricao>
        <ButtonContainer>
          <Link className="link2" to="/perfil">
            {button}
          </Link>
        </ButtonContainer>
      </Fundo>
    </Card>
  )
}

export default Product
