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
export const BarraLateral = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 80px;
  position: absolute;
  width: 360px;
  height: 1624px;
  top: 0;
  left: 985px;
  background-color: ${cores.pink};

  .img1 {
    position: absolute;
    width: 344px;
    height: 100px;
    top: 10px;
    left: 5px;
    margin-bottom: 20px;
  }
  .img2 {
    position: absolute;
    width: 344px;
    height: 100px;
    top: 120px;
    left: 5px;
    margin-bottom: 20px;
  }
  .img3 {
    position: absolute;
    width: 344px;
    height: 100px;
    top: 230px;
    left: 5px;
    margin-bottom: 20px;
  }

  ${CardButton} {
    position: absolute;
    width: 344px;
    height: 24px;
    top: 400px;
    left: 5px;
  }
`

export const Precos = styled.div`
  position: absolute;
  width: 344px;
  height: 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  color: ${cores.branco};
  top: 360px;
  left: 5px;
`
export const Content = styled.div`
  padding: 20px;
  text-align: center;
`
