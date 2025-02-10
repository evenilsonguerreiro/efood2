import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterBar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 298px;
  margin-top: 100px;
  background-color: ${cores.branco};
`
export const FooterLogo = styled.div`
  img {
    width: 125px;
    height: 57px;
  }
`
export const FooterIcones = styled.div`
  img {
    width: 30px;
    padding: 5px;
  }
`
export const FooterDescricao = styled.div`
  width: 480px;
  height: 24px;
  text-align: center;
  font-size: 10px;
  color: ${cores.pink};
`
