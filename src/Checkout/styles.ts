import styled from 'styled-components'
import { cores } from '../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.salmaoClaro};
    display: block;
    margin-bottom: 8px;
  }

  input {
    background-color: ${cores.salmaoClaro};
    border: 1px solid ${cores.salmaoClaro};
    height: 32px;
    padding: 0 8px;
    color: #4b4b4b;
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    margin-bottom: 8px;
    outline: none;

    &.error {
      border: 2px solid #ff0000;
    }
  }
`

export const CheckoutContainer = styled.div`
  color: ${cores.salmaoClaro};

  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  /* Ajuste no botão para cobrir 100% da largura e dar margem */
  button {
    width: 100%;
    margin-bottom: 8px;
  }
`
