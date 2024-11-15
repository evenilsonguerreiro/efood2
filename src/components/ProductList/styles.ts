import styled from "styled-components"
import { Props } from "."

export const Container = styled.section<Omit<Props, "title" | "comidas">>`
  background-color: transparent;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: grid;
  grid-template-columns: 1fr ;
  }
`
