import styled from 'styled-components'
import { Props } from './index'

export const Container = styled.section<Omit<Props, 'title' | 'comidas'>>`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Força 2 colunas */
  gap: 24px;
  width: 100%;
  max-width: 1024px; /* Limita a largura total do grid */
  margin: 0 auto;
`
