import styled, { css } from 'styled-components'
import { cores } from '../styles'
import { Link } from 'react-router-dom'

type Props = {
  variant?: 'primary' | 'secondary'
}

const BaseStyles = css<Props>`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;

  /* Lógica de inversão de cores */
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.salmao : cores.salmaoClaro};

  color: ${(props) =>
    props.variant === 'primary' ? cores.salmaoClaro : cores.salmao};

  border: 1px solid ${cores.salmao};
`

export const ButtonContainer = styled.button<Props>`
  ${BaseStyles}
`

export const ButtonLink = styled(Link)<Props>`
  ${BaseStyles}
`
