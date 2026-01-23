import styled from 'styled-components'
import { cores } from '../styles'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: none;

  &.visivel {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContainer = styled.div`
  position: relative;
  z-index: 3;
  > img {
    width: 16px !important;
    height: 16px !important;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 3;
  }
`

export const ModalContent = styled.div`
  background-color: ${cores.salmao};
  padding: 32px;
  color: ${cores.corDeFundo};
  display: flex;
  width: 1024px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const BotaoModal = styled.button`
  background-color: ${cores.corDeFundo}; // Cor clara do botão
  color: ${cores.salmao};
  border: none;
  padding: 4px 8px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
`
