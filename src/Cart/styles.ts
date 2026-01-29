import styled from 'styled-components'
import { breackpoints, cores } from '../styles'
import { ButtonContainer } from '../Button/styles'
import remover from '../assets/images/lixeira.png'
import closeIcon from '../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1000;

  &.is-open {
    display: flex;
  }

  &.close-button {
    position: relative;
  }
`

export const CartCloseButton = styled.button`
  background-image: url(${closeIcon});
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const SideBar = styled.aside`
  background-color: ${cores.salmao};
  z-index: 1001;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breackpoints.mobile}) {
    width: 85%;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  ${ButtonContainer} {
    display: block;
    width: 100%;
    margin-top: 16px;
  }
`
export const CartItem = styled.div`
  background-color: ${cores.salmaoClaro};
  display: flex;
  padding: 8px 8px 12px 8px;
  position: relative;
  margin-top: 16px;

  h3 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 18px;
  }

  button {
    background-image: url(${remover});
    border: none;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: transparent;
    cursor: pointer;
  }
`

export const Price = styled.div`
  display: flex;
  color: ${cores.corDeFundo};
  justify-content: space-between;
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
`
