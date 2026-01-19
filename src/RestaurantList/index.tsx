import RestaurantCard from '../RestaurantCard'
import { ListContainer } from './styles'
import Restaurant from '../Models/Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <ListContainer>
      {restaurants.map((item) => (
        <RestaurantCard
          id={item.id}
          key={item.id}
          title={item.title}
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
