import styled from 'styled-components'
import { cores } from '../../styles'
import { CardButton } from '../../components/Product2/styles'

// Estilo para o Overlay
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

// Estilo para a BarraLateral
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
  padding: 10px;

  ${CardButton} {
    position: absolute;
    width: 344px;
    height: 24px;
    top: 400px;
  }
`

// Estilo para o TituloEntrega
export const TituloEntrega = styled.span`
  width: 219px;
  height: 19px;
  font-size: 16px;
  font-weight: 700;
  color: ${cores.branco};
  margin-bottom: 10px;
  text-align: start;
`

// Estilo para o SubTitulo
export const SubTitulo = styled.p`
  width: 344px;
  height: 286px;
  color: ${cores.branco};
  font-size: 14px;
  line-height: 22px;
  text-align: start;
  margin-top: 30px;
`

// Estilo para o DivText
export const DivText = styled.div`
  width: 344px;
  height: 286px;
`

// **Adicionando os novos componentes `Content` e `Precos`**

// Estilo para o Content (que estava faltando)
export const Content = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); // Exemplo de estilo
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Estilo para o Precos
export const Precos = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: ${cores.branco};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h4 {
    font-weight: bold;
  }
  span {
    font-size: 22px;
  }
`
