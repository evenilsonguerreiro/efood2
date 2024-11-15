import styled from "styled-components"
import { cores } from "../../styles"

export const FooterBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 298px;
  background-color: ${cores.branco};

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 370px;
    height: 298px;
    background-color: ${cores.branco};
  }
`
export const FooterLogo = styled.div`
  position: absolute;
  top: 40px;
  img {
    width: 125px;
    height: 57px;
  }

  @media (max-width: 768px) {
    position: absolute;
  top: 40px;
  img {
    width: 100px;

  }
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

  @media (max-width: 768px) {
    position: absolute;
    top: 230px;
    width: 300px;
    height: 24px;
    text-align: center;
    font-size: 10px;
    color: ${cores.pink};
  }
`
