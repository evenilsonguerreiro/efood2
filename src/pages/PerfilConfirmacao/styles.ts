import styled from 'styled-components'
import { cores } from '../../styles'
import { CardButton } from '../../components/Product2/styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const BarraLateral = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 80px;
  position: absolute;
  width: 360px;
  height: 1624px;
  top: 0;
  left: 985px;
  background-color: ${cores.pink};
  padding: 10px;

  ${CardButton} {
    position: absolute;
    width: 344px;
    height: 24px;
    top: 400px;
  }
`
export const TituloEntrega = styled.span`
  width: 219px;
  height: 19px;
  font-size: 16px;
  font-weight: 700px;
  color: ${cores.branco};
  margin-bottom: 10px;
  text-align: start;
`
export const SubTitulo = styled.p`
  width: 344px;
  height: 286px;
  color: ${cores.branco};
  font-size: 14px;
  line-height: 22px;
  text-align: start;
  margin-top: 30px;
`
export const DivText = styled.div`
  width: 344px;
  height: 286px;
`
