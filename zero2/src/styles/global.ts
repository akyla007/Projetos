import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 0.05rem ${(props) => props.theme['green-500']};
    }

    body{
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
    }

    body, input, button, textarea {
        font-size: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`