import styled from 'styled-components'
import { cores } from '../styles'

interface ImagemProps {
  foto: string
}

export const Imagem = styled.div<ImagemProps>`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.foto});
  position: relative;
  padding: 32px 0;
  color: ${cores.branca};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Categoria = styled.span`
  font-weight: 100;
  font-size: 32px;
  text-transform: capitalize;
`
export const TituloBanner = styled.h2`
  font-weight: 900;
  font-size: 32px;
`
