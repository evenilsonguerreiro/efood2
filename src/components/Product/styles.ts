import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branco2};
  width: 472px;
  height: 398px;
  top: 8px;
  left: 15px;
  border: 1px solid ${cores.pink};
  position: relative;

  img {
    width: 472px;
    height: 217px;
    top: 440px;
    left: 171px;
    object-fit: cover;
  }
`
export const Fundo = styled.div`
  width: 472px;
  height: 181px;
  top: 657px;
  left: 171px;
`
export const Titulo = styled.h3`
  width: 300px;
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  top: 665px;
  left: 178px;
  margin-bottom: 5px;
  margin-left: 5px;
  color: ${cores.pink};
`
export const Descricao = styled.p`
  width: 456px;
  height: 88px;
  font-size: 14px;
  font-weight: 400;
  top: 702px;
  left: 178px;
  line-height: 22px;
  margin-left: 5px;
  color: ${cores.pink};
`
export const Infos = styled.div`
  width: 121px;
  height: 26px;
  display: flex;
  position: absolute;
  top: 10px;
  left: 300px;
  gap: 10px;
`
export const Lista = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 400px;
`
