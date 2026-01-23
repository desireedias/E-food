import Estrela from '../assets/images/estrela.png'
import {
  CardContainer,
  CardContent,
  CardImage,
  Descricao,
  TagsContainer,
  TituloContainer
} from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  title: string
  rating: number
  category: string
  image: string
  description: string
  infos: string[]
}

const RestaurantCard = ({
  id,
  title,
  rating,
  image,
  description,
  infos
}: Props) => (
  <CardContainer>
    <CardImage src={image} alt={title} />
    <TagsContainer>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </TagsContainer>
    <CardContent>
      <TituloContainer>
        <h3>{title}</h3>
        <div>
          <span>{rating}</span>
          <img src={Estrela} alt="estrela" />
        </div>
      </TituloContainer>
      <Descricao>{description}</Descricao>
      <Link to={`/perfil/${id}`}>
        <Button title="Saiba mais">Saiba Mais</Button>
      </Link>
    </CardContent>
  </CardContainer>
)

export default RestaurantCard
