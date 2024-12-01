import styled from 'styled-components'
import { cores } from '../../styles'
import { CardButton } from '../../components/Product2/styles'

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
  position: fixed; /* Usar fixed para manter a barra visível */
  top: 0;
  left: 985px;
  width: 360px;
  height: 100%; /* Agora ocupa toda a altura da tela */
  background-color: ${cores.pink};
  padding: 10px;
  z-index: 10;
`

export const TituloEntrega = styled.span`
  width: 56px;
  height: 19px;
  text-align: start;
  font-size: 16px;
  font-weight: 700;
  color: ${cores.branco};
  margin-bottom: 10px;
`

export const SubTitulo = styled.p`
  width: 109px;
  height: 16px;
  text-align: start;
  color: ${cores.branco};
  font-size: 14px;
  margin-bottom: 10px;
`

export const Campo = styled.div`
  width: 320px;
  height: 32px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${cores.branco};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 10px;
`

export const CampoMedio = styled.div`
  width: 135px;
  height: 32px;
  background-color: ${cores.branco};
  margin-bottom: 16px;
  padding: 0 10px;
`

export const Endereco = styled.p`
  width: 59px;
  height: 16px;
  color: ${cores.branco};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: start;
`

export const Complemento = styled.p`
  width: 156px;
  height: 16px;
  color: ${cores.branco};
  font-size: 14px;
  margin-bottom: 10px;
`

export const DivCep = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
`

export const DivButtom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px; /* Distância do topo */
  width: 360px;
  position: relative;

  /* Garantir que o CardButton tenha a altura correta e se alinhe corretamente */
  ${CardButton} {
    width: 335px;
    height: 32px;
    margin-bottom: 30px; /* Distância entre os botões */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${cores.branco}; /* Você pode customizar conforme necessário */
    position: absolute;
    top: 10px;
    left: 2px;
  }

  ${CardButton} + ${CardButton} {
    margin-top: 50px; /* Distância entre os botões */
  }
`
