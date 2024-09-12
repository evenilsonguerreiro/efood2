import styled from "styled-components"

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

export const Content = styled.div`
  padding: 20px;
  text-align: center;

  img {
    max-width: 100%;
    height: 344px;
  }
`
