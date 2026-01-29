import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  salmao: '#E66767',
  salmaoClaro: '#FFEBD9',
  corDeFundo: '#FFF8F2'
}

export const breackpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
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

  @media (max-width: ${breackpoints.desktop}){
    max-width: 80%;
  }

}

`
