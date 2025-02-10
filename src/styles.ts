import { createGlobalStyle } from 'styled-components'

export const cores = {
  pink: '#E66767',
  rosa: '#FFF8F2',
  branco: '#FFEBD9',
  branco2: '#ecf0f1'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  .link {
    color: ${cores.pink};
    text-decoration: none;
  }

  .link2 {
    color: ${cores.branco};
    text-decoration: none;
  }

  body {
    background-color: #fff;
    font-size: 40px;
  }

  .container {
    max-width: 1028px;
    width: 100%;
    margin: 0 auto; /* Centraliza horizontalmente */
  }

  .container2 {
    display: flex;
    margin: 0 auto; /* Centraliza horizontalmente */
    max-width: 1024px; /* Largura máxima */
    width: 100%;
    height: 1290px;
  }
`
