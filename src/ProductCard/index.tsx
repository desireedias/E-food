import { BotaoAdicionar, Card, Descricao, Foto, Titulo } from './styles'

type Props = {
  nome: string
  foto: string
  descricao: string
  onOpen: () => void
}

const ProductCard = ({ nome, foto, descricao, onOpen }: Props) => (
  <Card>
    <Foto src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar onClick={onOpen}>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)

export default ProductCard
