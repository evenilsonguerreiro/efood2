import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  position: relative;
  width: 320px;
  height: 348px;
  top: 300px;
  left: 171px;
  background-color: ${cores.pink};
`
export const CardImg = styled.div`
  img {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 304px;
    height: 160px;
  }
`
export const CardTitle2 = styled.h3`
  width: 250px;
  height: 19px;
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  color: ${cores.branco};
  position: absolute;
  top: 175px;
  left: 8px;
`
export const CardDescricao2 = styled.p`
  width: 304px;
  height: 88px;
  color: ${cores.branco};
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  position: absolute;
  top: 190px;
  left: 8px;
`
export const CardButton = styled.button`
  width: 304px;
  height: 24px;
  padding: 5px;
  background-color: ${cores.branco};
  color: ${cores.pink};
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  border: none;
  position: absolute;
  top: 316px;
  left: 8px;
  cursor: pointer;
`
