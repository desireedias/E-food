import logo from '../assets/images/logo.png'
import {
  Centralizador,
  Copyright,
  FooterContainer,
  Logo,
  SocialLinks
} from './styles'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <Centralizador className="container">
      <Logo src={logo} alt="logo" />
      <SocialLinks>
        <li>
          <a href="#">
            <img src={instagram} alt="instagram-logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="facebook-logo" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="twitter-logo" />
          </a>
        </li>
      </SocialLinks>
      <Copyright>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </Copyright>
    </Centralizador>
  </FooterContainer>
)

export default Footer
