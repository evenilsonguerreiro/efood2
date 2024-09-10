import styled from "styled-components"
import { cores } from "../../styles"

import { Link } from "react-router-dom"

export const ButtonContainer = styled.button`
  background-color: ${cores.pink};
  color: ${cores.branco};
  width: 82px;
  height: 24px;
  font-size: 14px;
  align-items: center;
  border: none;
  font-weight: 700px;
  margin-left: 5px;
  text-decoration: none;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  color: ${cores.branco};
  width: 82px;
  height: 24px;
  font-size: 14px;
  align-items: center;
  border: none;
  font-weight: 700px;
  text-decoration: none;
  cursor: pointer;
`
