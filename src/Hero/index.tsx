import { HeroContainer, Imagem } from './styles'
import Logo from '../assets/images/logo.png'

const Hero = () => (
  <Imagem>
    <HeroContainer>
      <img src={Logo} alt="logo" />
      <h1>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </h1>
    </HeroContainer>
  </Imagem>
)

export default Hero
