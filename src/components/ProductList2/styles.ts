import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Props>`
  background-color: transparent;
`

export const List2 = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  margin: 0 auto;

  @media screen and (min-width: 1920px) and (min-height: 1080px) {
    .Lista2 {
      top: -50%;
      left: -50%;
      transform: translate(50%, 50%);
      width: auto;
    }
  }
`
