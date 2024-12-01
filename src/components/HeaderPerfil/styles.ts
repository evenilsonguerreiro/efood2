import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderPerfilBar = styled.div`
  display: flex;
  justify-content: space-between; /* Espaço entre os elementos */
  align-items: center; /* Alinha verticalmente */
  width: 100%;
  height: 186px;
  background-color: ${cores.branco};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Alinha verticalmente */
    width: 100%;
    height: 186px;
    background-color: ${cores.branco};
  }
`

export const HeaderPerfillogo2 = styled.div`
  display: flex;
  align-items: center;
  width: 109px;
  height: 21px;
  font-size: 18px;
  color: ${cores.pink};
  margin-right: auto; /* Empurra o logo para a esquerda */
`

export const HeaderPerfilLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centraliza o conteúdo */
  width: 125px;
  height: 57px;
  margin-left: auto;
  margin-right: auto;
  img {
    max-width: 100%;
    height: auto;
  }
`

export const HeaderPerfilLogo3 = styled.div`
  display: flex;
  align-items: center;
  width: 256px;
  height: 21px;
  font-size: 18px;
  color: ${cores.pink};
`
