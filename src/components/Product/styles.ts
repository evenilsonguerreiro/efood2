import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  width: 472px;
  height: 398px;
  margin-top: 40px;
  border: 1px solid ${cores.pink};
  position: relative;

  ${TagContainer} {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    background-color: ${cores.branco};
    width: 370px;
    height: 380px;
    margin-top: 10px;
    border: 1px solid ${cores.pink};
    position: relative;

    img {
      width: 370px;
    }
  }
`

export const Fundo = styled.div`
  width: 472px;
  height: 181px;

  @media (max-width: 768px) {
    width: 470px;
    height: 181px;
  }
`
export const Titulo = styled.h3`
  width: 92px;
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
  margin-bottom: 16px;
  color: ${cores.pink};
`
export const Descricao = styled.p`
  width: 456px;
  height: 70px;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  color: ${cores.pink};

  @media (max-width: 768px) {
    width: 340px;
    height: 70px;
    font-size: 14px;
    font-weight: 400;
    margin-left: 5px;
    color: ${cores.pink};
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 10px;
  left: 300px;
`
