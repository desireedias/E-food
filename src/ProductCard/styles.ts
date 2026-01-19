import styled from 'styled-components'
import { cores } from '../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${cores.salmao};
  color: ${cores.salmaoClaro};
`

export const Foto = styled.img`
  width: 100%;
  height: 167px;
  padding-bottom: 8px;
  display: block;
`
export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${cores.salmaoClaro};
  color: ${cores.salmao};
  padding: 4px 0;
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
`
