import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderBar = styled.header`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
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
  top: 236px;
  display: flex;
  align-items: center;
  color: ${cores.pink};
  font-weight: bold;
`
