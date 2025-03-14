import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco2};
  width: 498px;
  height: 400px;
  border: 1px solid ${cores.pink};
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`
export const Fundo = styled.div`
  padding: 5px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${cores.pink};
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.pink};
`

export const Infos = styled.div`
  position: absolute;
  top: 10px;
  left: 67%;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
`
