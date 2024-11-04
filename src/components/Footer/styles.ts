import styled from "styled-components"

export const FooterBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  img {
    width: 100%;
  }
`
export const FooterLogo = styled.div`
  position: absolute;
  top: 40px;
  left: 44%;

  img {
    width: 125px;
    height: 57px;
  }
`
export const FooterIcones = styled.div`
  position: absolute;
  top: 140px;
  left: 44%;

  img {
    width: 30px;
    margin-right: 16px;
  }
`
export const FooterDescricao = styled.p`
  position: absolute;
  display: flex;
  align-items: center;
  top: 230px;

  img {
    width: 480px;
    height: 24px;
  }
`
