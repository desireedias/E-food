import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  salmao: '#E66767',
  salmaoClaro: '#FFEBD9',
  corDeFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.corDeFundo};
    color: ${cores.salmao};
  }
  
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

`
