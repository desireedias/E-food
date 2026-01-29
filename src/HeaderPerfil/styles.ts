import styled from 'styled-components'
import FundoHeader from '../assets/images/Vector.png'
import { cores } from '../styles'

export const HeaderContainer = styled.header`
  background-image: url(${FundoHeader});
  background-color: ${cores.salmaoClaro};
  display: flex;
  align-items: center;
  padding: 40px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    font-size: 18px;
  }

  a {
    background-color: transparent;
    color: ${cores.salmao};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0; // Mais fino no mobile

    .container {
      flex-direction: column; // Empilha se o logo for muito grande
      gap: 16px;
    }
  }
`
