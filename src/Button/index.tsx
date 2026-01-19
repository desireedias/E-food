import { ButtonContainer } from './styles'

type Props = {
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ title, to, onClick, children }: Props) => (
  <ButtonContainer title={title} to={to} onCLick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
