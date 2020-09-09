import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
        padding: 2rem 3rem;

        @media only screen and (max-width: 50em) {
            padding: 1rem;
        }
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;
