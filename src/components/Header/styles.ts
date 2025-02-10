import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 384px;
  background-color: ${cores.branco};
`
export const HeaderLogo = styled.div`
  width: 125px;
  height: 57px;
`
export const HeaderDescricao = styled.div`
  font-size: 36px;
  width: 539px;
  height: 84px;
  text-align: center;
  color: ${cores.pink};
  font-weight: bold;
`
