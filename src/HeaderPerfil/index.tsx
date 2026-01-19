import { HeaderContainer } from './styles'
import Logo from '../assets/images/logo.png'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div className="container">
      <a href="#">Restaurantes</a>
      <img src={Logo} alt="logo" />
      <a href="#">0 produto(s) no carrinho</a>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
