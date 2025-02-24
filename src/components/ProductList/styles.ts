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
  gap: 24px;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 1024px;
  }
`
