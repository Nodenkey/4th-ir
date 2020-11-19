import {createGlobalStyle} from "styled-components";

import {primaryFont} from "./typography";


export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 16px;
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }
    
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    h1, h2, h3, h4, h5, h6, p {
      margin: 0 auto;
      max-width: 1500px;
    }
    
    body {
        margin: 0;
        font-family: ${primaryFont};
    }
    
    a {
        text-decoration: none;
    }
    
    .hide-overflow {
      overflow-y: hidden;
    }  
`;
