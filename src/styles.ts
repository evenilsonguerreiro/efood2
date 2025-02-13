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

  body {
    margin: 0;
    background-color: #fff;
    font-size: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1920px) {
      .container {
        margin: 0 auto;
        width: 100%
      }
    }
  }

  .container2 {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
