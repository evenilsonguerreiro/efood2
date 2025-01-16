import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 384px;
  background-color: ${cores.branco};
  top: -24px;
  position: relative;
`
export const HeaderLogo = styled.div`
  width: 125px;
  height: 57px;
  top: 40px;
  left: 621px;
  position: absolute;
`
export const HeaderDescricao = styled.div`
  font-size: 36px;
  width: 539px;
  height: 84px;
  top: 236px;
  left: 414px;
  text-align: center;
  color: ${cores.pink};
  font-weight: bold;
  position: absolute;
`
