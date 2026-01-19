import { BotaoAdicionar, Card, Descricao, Foto, Titulo } from './styles'

type Props = {
  nome: string
  foto: string
  descricao: string
}

const ProductCard = ({ nome, foto, descricao }: Props) => (
  <Card>
    <Foto src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)

export default ProductCard
