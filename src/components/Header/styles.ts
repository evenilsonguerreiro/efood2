import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderBar = styled.header`
  width: 100%;
  height: 384px;
  background-color: ${cores.branco};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeaderLogo = styled.div`
  width: 125px;
  height: 57px;
  top: 45px;
  position: absolute;
`
export const HeaderDescricao = styled.div`
  font-size: 36px;
  width: 539px;
  height: 89px;
  text-align: center;
  position: absolute;
  top: 220px;
  color: ${cores.pink};
  font-weight: bold;
`
