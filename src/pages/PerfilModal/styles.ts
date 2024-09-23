import styled from "styled-components"
import { cores } from "../../styles"
import { CardButton } from "../../components/Product2/styles"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const ModalFundo = styled.div`
  position: relative;
  width: 1024px;
  height: 344px;
  display: flex;
  background-color: ${cores.pink};

  img {
    position: absolute;
    width: 280px;
    height: 280px;
    top: 35px;
    left: 16px;
  }

  ${CardButton} {
    position: absolute;
    top: 280px;
    left: 310px;
  }
`
export const ModalTitle = styled.h3`
  width: 140px;
  height: 21px;
  color: ${cores.branco};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  position: absolute;
  top: 35px;
  left: 310px;
`
export const Descricao = styled.p`
  width: 656px;
  height: 176px;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: start;
  align-items: center;
  color: ${cores.branco};
  position: absolute;
  top: 70px;
  left: 310px;
`
export const ModalSpan = styled.span`
  color: ${cores.branco};
  font-size: 14px;
  position: absolute;
  top: 230px;
  left: 310px;
`
export const Content = styled.div`
  padding: 20px;
  text-align: center;
`
