import { createGlobalStyle } from 'styled-components'

export const cores = {
  pink: '#E66767',
  rosa: '#FFF8F2',
  branco: '#FFEBD9'
}

export const EstiloGlobal = createGlobalStyle`
  *{
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


  body{
    background-color: #fff;
    font-size: 40px;

    .container{
      max-width: 1024px;
      width: 100%;
      margin: auto;
    }
  }
  @media (max-width:768px) {
    max-width: 80%;
    width: 100%;
    margin: auto;


  }

`
