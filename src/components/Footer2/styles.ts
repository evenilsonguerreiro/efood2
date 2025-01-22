import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 3700px;
  width: 100%;
  height: 298px;
  background-color: ${cores.branco};
`
export const FooterLogo = styled.div`
  position: absolute;
  top: 40px;
  img {
    width: 125px;
    height: 57px;
  }
`
export const FooterIcones = styled.div`
  position: absolute;
  top: 140px;
  img {
    width: 30px;
    padding: 5px;
  }
`
export const FooterDescricao = styled.div`
  position: absolute;
  top: 230px;
  width: 480px;
  height: 24px;
  text-align: center;
  font-size: 10px;
  color: ${cores.pink};
`
