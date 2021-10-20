import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --fontBig: 1.5rem;
        --fontMed: 1rem;
        --fontSmall: 0.8rem;
        --grayDark: #333333;
        --grayLight: #999999;
        --whiteText: #ffffff;
        --darkText: #111111;
        --textHoverColor: #da7c3a;
    }
    
    *{
        border: 0;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    a{
        color: #fff;
        text-decoration: none;
        display: block;
    }
    
`;
