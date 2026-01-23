import { HeaderContainer } from './styles'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderPerfil = () => (
  <HeaderContainer>
    <div className="container">
      <a href="#">Restaurantes</a>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ cursor: 'pointer' }} />
      </Link>
      <a href="#">0 produto(s) no carrinho</a>
    </div>
  </HeaderContainer>
)

export default HeaderPerfil
