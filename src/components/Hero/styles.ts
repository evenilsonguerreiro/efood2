import styled from 'styled-components'

export const HeroBar = styled.div`
  position: absolute;
  width: 100%;
  height: 280px;
  top: 162px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Camada preta escura */
    z-index: 1;
  }

  .container {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%); /* Centraliza horizontalmente */
    display: flex;
    flex-direction: column; /* Coloca os textos um abaixo do outro */
    align-items: flex-start; /* Alinha os textos à esquerda dentro do container */
    width: 1024px; /* Largura do seu container */
    z-index: 2; /* Garante que os textos fiquem sobre a camada escura */
  }

  .text-overlay {
    text-align: left; /* Alinha o texto à esquerda */
    color: white;
    z-index: 3;
  }

  .text-overlay p {
    font-size: 32px;
    margin: 45px 0; /* Espaço entre os textos */
  }

  .text-overlay span {
    font-size: 32px;
  }
`
