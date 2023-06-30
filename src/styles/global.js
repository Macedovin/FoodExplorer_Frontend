import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.full_background};

    color: ${({ theme }) => theme.primary_text}; 
    font-size: 1.4rem;

    font-family: 'Poppins', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    
    border: 0;
    border-radius: 0.5rem;

    cursor: pointer;
    transition: 0.2s;
  } 

  ul, li {
    list-style: none;
  }
`;