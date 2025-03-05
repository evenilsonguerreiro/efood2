import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderPerfilBar = styled.div`
  position: relative;
  width: 100%;
  height: 186px;
  background-color: ${cores.branco};

  .container {
    display: flex;
    flex-direction: row; /* Alinha os itens na horizontal */
    align-items: center; /* Alinha os itens verticalmente ao centro */
    justify-content: space-between; /* Ajusta o espaçamento entre os itens */
    width: 100%; /* Garante que ocupe toda a largura */
    max-width: 1024px; /* Ajuste a largura máxima se necessário */
    margin: 0 auto; /* Centraliza horizontalmente */
  }
`
export const HeaderPerfillogo2 = styled.div`
  width: 120px;
  height: 57px;
  font-size: 18px;
  color: ${cores.pink};
  margin-top: 80px;
`
export const HeaderPerfilLogo = styled.div`
  width: 100px;
  height: 57px;
  font-size: 18px;
  margin-top: 50px;

  img {
    width: 120px;
  }
`
export const HeaderPerfilLogo3 = styled.div`
  width: 256px;
  height: 57px;
  font-size: 18px;
  color: ${cores.pink};
  margin-top: 80px;
`
