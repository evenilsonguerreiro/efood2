import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderPerfilBar = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.branco};
  display: flex;
  justify-content: center; /* Garante que o conteúdo fique centralizado */
  align-items: center;
`
export const HeaderPerfilContent = styled.div`
  display: flex;
  justify-content: space-between; /* Ajusta os elementos dentro da linha */
  align-items: center;
  width: 100%;
  max-width: 1024px; /* Ajuste para a largura máxima do container */
`
export const HeaderPerfillogo2 = styled.div`
  width: 125px;
  height: 57px;
  font-size: 18px;
  color: ${cores.pink};
`
export const HeaderPerfilLogo = styled.div`
  display: flex;
  justify-content: center; /* Garante que a logo fique centralizada */
  width: 125px;
  height: 57px;
`
export const HeaderPerfilLogo3 = styled.div`
  width: 125px;
  height: 57px;
  font-size: 18px;
  color: ${cores.pink};
`
