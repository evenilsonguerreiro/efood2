import { createGlobalStyle } from 'styled-components'

export const cores = {
  pink: '#E66767',
  rosa: '#FFF8F2',
  branco: '#FFEBD9',
  branco2: '#fff'
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
  main {
    flex: 1; /* Faz com que o conteúdo principal ocupe o espaço necessário */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

  body {
    margin: 0;
    background-color: #fff;
    font-size: 40px;
  }

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

  .container2 {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    margin-top: 30px;
  }
`
