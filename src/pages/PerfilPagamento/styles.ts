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
export const TituloEntrega = styled.span`
  width: 270px;
  height: 19px;
  font-size: 16px;
  font-weight: 700px;
  color: ${cores.branco};
  margin-bottom: 10px;
`
export const SubTitulo = styled.p`
  width: 101px;
  height: 16px;
  color: ${cores.branco};
  font-size: 14px;
  margin-bottom: 10px;
`
export const Campo = styled.div`
  width: 344px;
  height: 32px;
  font-size: 14px;
  font-weight: 700px;
  background-color: ${cores.branco};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
export const CampoMedio = styled.div`
  width: 155px;
  height: 32px;
  background-color: ${cores.branco};
  margin-bottom: 16px;
`
export const Endereco = styled.p`
  width: 114px;
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

  ${Endereco} {
    width: 123px;
    height: 24px;
  }
`
export const Campo1 = styled.div`
  width: 228px;
  height: 32px;
  background-color: ${cores.branco};
`
export const Campo2 = styled.div`
  width: 98px;
  height: 32px;
  background-color: ${cores.branco};
`
export const DivCartao = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  gap: 10px;
`
export const DivButtom = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px; /* Distância do topo */
  width: 360px;
  position: relative;
  background-color: #000;

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
