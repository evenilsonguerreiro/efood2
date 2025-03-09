import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderPerfilBar = styled.div`
  width: 100%;
  height: 186px;
  background-color: ${cores.branco};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    height: 186px;
    margin: 0 auto;
  }
`
export const HeaderPerfillogo2 = styled.div`
  width: 109px;
  height: 21px;
  font-size: 18px;
  color: ${cores.pink};
`
export const HeaderPerfilLogo = styled.div`
  width: 125px;
  height: 57px;
  font-size: 18px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
export const HeaderPerfilLogo3 = styled.div`
  width: 256px;
  height: 21px;
  font-size: 18px;
  color: ${cores.pink};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
