import styled from 'styled-components'
import { cores } from '../../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ConteudoModal = styled.div`
  position: relative;
  z-index: 1;
  width: 1024px;
  height: 344px;
  background-color: ${cores.pink};
`
export const ImagemModal = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  top: 30px;
  left: 30px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
export const TituloModal = styled.span`
  width: 400px;
  height: 21px;
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 30px;
  left: 350px;
  color: ${cores.branco};
`
export const DescricaoModal = styled.div`
  position: absolute;
  top: 60px;
  left: 350px;
  width: 656px;
  height: 176px;
  font-size: 14px;
  color: ${cores.branco2};
  line-height: 22px;
`
export const ButtonModal = styled.button`
  position: absolute;
  width: 218px;
  height: 24px;
  top: 290px;
  left: 350px;
  font-weight: bold;
  background-color: ${cores.branco};
  color: ${cores.pink};
  border: 0px;
`
export const CloseModal = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 2px;
  left: 980px;
`
