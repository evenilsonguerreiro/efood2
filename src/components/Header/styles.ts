import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderBar = styled.header`
  width: 100%;
  position: relative;

  img {
    width: 100%;
  }
`
export const HeaderLogo = styled.div`
  width: 125px;
  height: 57px;
  top: 45px;
  left: 45%;
  position: absolute;
`
export const HeaderDescricao = styled.div`
  font-size: 36px;
  width: 539px;
  height: 89px;
  text-align: center;
  position: absolute;
  top: 236px;
  left: 414px;
  color: ${cores.pink};
  font-weight: bold;
`
