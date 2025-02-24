import styled from 'styled-components'
import { Props } from './index'

export const Container = styled.section<Omit<Props, 'title' | 'comidas'>>`
  background-color: transparent;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 1024px;
  width: 100%;
  background-color: #000;
`
