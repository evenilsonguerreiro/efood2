import { createGlobalStyle } from "styled-components"

export const cores = {
  pink: "#E66767",
  rosa: "#FFF8F2",
  branco: "#FFEBD9"
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  .link {
    color: ${cores.branco};
    text-decoration: none;
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

`
