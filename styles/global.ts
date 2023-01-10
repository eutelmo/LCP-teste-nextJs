import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --red: #7A0303;
    --blue: #03507A;
    --green: #33CC95;
  
    
    --text-title: #03507A;
    --text-body: #000000;
    --shape: #FFFFFF;
    --disabled: #808080;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width: 1080px) {
      font-size: 93.75% 
    }
    @media (max-width: 720px) {
      font-size: 87.5% 
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textearea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 900;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reac-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }
  .react-modal-content{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;
    transition: 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`