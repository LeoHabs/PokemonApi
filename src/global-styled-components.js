import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
    }

    body {
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url("https://i.pinimg.com/originals/98/00/ff/9800ff153c8f538c15d6dbfb53b76b39.png");
    }
`;