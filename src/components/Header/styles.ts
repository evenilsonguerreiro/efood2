import styled from "styled-components"
import { cores } from "../../styles"

export const HeaderBar = styled.header`
  width: 100%;
  height: 384px;
  background-color: ${cores.branco};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width:768px) {
    width: 100%;
    height: 170px;
    background-color: ${cores.branco};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

  }
`
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;

  img{
    width: 125px;
    height: 57px;
  }


  @media (max-width:768px) {
    margin-top: 10px;
    display: flex;
    align-items: center;

    img {
      width: 100px;
    }
  }
`
export const HeaderDescricao = styled.div`
  font-size: 36px;
  width: 539px;
  height: 89px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-top: 120px;
  color: ${cores.pink};
  font-weight: bold;

  @media (max-width:768px) {
    font-size: 16px;
    width: 250px;
    height: 89px;
    text-align: center;
    display: flex;
    align-items: center;
    margin-top: 10px;
    color: ${cores.pink};
    font-weight: bold;

  }
`
