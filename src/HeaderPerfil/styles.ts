import styled from 'styled-components'
import FundoHeader from '../assets/images/Vector.png'
import { cores } from '../styles'

export const HeaderContainer = styled.header`
  background-image: url(${FundoHeader});
  background-color: ${cores.salmaoClaro};
  display: flex;
  align-items: center;
  padding: 40px 0;

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
`
