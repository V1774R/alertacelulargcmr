import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url('fonts/RobotoCondensed-VariableFont_wght.ttf') format('truetype');
    }
    *{
        font-family: 'Roboto', sans-serif;
    }
    a{
        text-decoration: none;
    }
    a:hover{
        opacity: 0.5;
        transition: .5s;
    }
    body{
        margin: 0px;
        padding: 0px;
        background-color: var(--cor-fundo);
    }
    main{
        padding: 2px;
        max-width: 1100px;
        margin: auto;
        min-height: calc(100vh - 120px);
    }
    :root{
        --cor-menu: #161653;
        --cor-rodape: #212125;
        --cor-botoes: var(--cor-menu);
        --cor-fundo: #dddddd;
    }
    button{
        background-color: var(--cor-botoes);
        color: white;
        border: none;
    }
    h1.titulo{
        text-align: center;
        width: 100%;
        font-size: 1.6rem;
    }
`