import styled from 'styled-components'
import { cores } from '../../styles'

export const Card2 = styled.div`
  position: relative;
  width: 320px;
  height: 338px;
  margin-top: 40px;
  background-color: ${cores.pink};

  @media (max-width: 768px) {
    position: relative;
    width: 370px;
    height: 390px;
    margin-top: 20px;
    background-color: ${cores.pink};
  }
`
export const CardImg = styled.div`
  img {
    position: absolute;
    top: 10px;
    left: 8px;
    width: 300px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    left: 25px;
    width: 360px;
  }
`
export const CardTitle2 = styled.h3`
  width: 124px;
  height: 19px;
  font-size: 16px;
  font-weight: 900;
  line-height: 18.75px;
  color: ${cores.branco};
  position: absolute;
  top: 190px;
  left: 8px;
`
export const CardDescricao2 = styled.p`
  width: 304px;
  height: 88px;
  color: ${cores.branco};
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  position: absolute;
  top: 210px;
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
  top: 305px;
  left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 300px;
    height: 24px;
    padding: 5px;
    background-color: ${cores.branco};
    color: ${cores.pink};
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    border: none;
    position: absolute;
    top: 305px;
    cursor: pointer;
  }
`
