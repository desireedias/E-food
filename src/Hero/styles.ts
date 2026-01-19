import styled from 'styled-components'
import HeroImg from '../assets/images/Vector.png'

export const Imagem = styled.div`
  background-image: url(${HeroImg});
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
export const HeroContainer = styled.div`
  padding: 40px 0;
  align-items: center;
  margin: auto 0;
  text-align: center;

  h1 {
    font-weight: 900;
    font-size: 36px;
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    line-height: 42px;
  }

  img {
    margin-bottom: 139px;
    cursor: pointer;
  }
`
