import styled from 'styled-components'

export const HeroBar = styled.div`
  position: absolute;
  width: 100%;
  height: 280px; /* Altura total do Hero */
  top: 162px;
  overflow: hidden; /* Garante que a imagem e o overlay não "escapem" */

  img {
    width: 100%;
    height: 100%; /* Ajusta a altura da imagem */
    object-fit: cover; /* Recorta proporcionalmente */
  }

  /* Overlay para escurecer a imagem */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Fundo preto com 40% de opacidade */
    z-index: 1; /* Coloca o overlay acima da imagem */
  }

  .text-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20px;
    color: white;
    z-index: 2; /* Garante que o texto fique acima do overlay */

    p {
      width: 300px;
      height: 33px;
      font-size: 32px;
      top: 30px;
      left: 180px;
      position: absolute;
    }

    span {
      width: 676px;
      height: 33px;
      font-size: 16px;
      top: 160px;
      left: 180px;
      position: absolute;
    }
  }
`
