import styled from 'styled-components'
import { cores } from '../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.salmaoClaro};
  padding: 40px 0;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  list-style: none;
  margin-bottom: 80px;

  li {
    cursor: pointer;
  }
`

export const Copyright = styled.p`
  font-size: 10px;
  max-width: 480px;
  margin: auto 0;
  text-align: center;
`
export const Centralizador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
