import { Restaurante } from '../Models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { ListContainer } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <ListContainer>
      {restaurants.map((item) => (
        <RestaurantCard
          id={item.id}
          key={item.id}
          title={item.titulo}
          category={item.tipo}
          image={item.capa}
          description={item.descricao}
          rating={item.avaliacao}
          infos={
            item.destacado ? ['Destaque da semana', item.tipo] : [item.tipo]
          }
        />
      ))}
    </ListContainer>
  </div>
)

export default RestaurantList
