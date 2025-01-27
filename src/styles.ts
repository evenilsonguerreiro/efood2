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

  .containerPerfil {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    width: 100%;
    margin: auto;
  }

  body {
    background-color: #fff;
    font-size: 40px;
  }

  .container {
    width: 1024px;
    height: 1290px;
    top: 440px;
    left: 171px;
  }

  .container2 {
    width: 1024px;
    height: 708px;
    top: 498px;
    left: 171px;
  }
`
