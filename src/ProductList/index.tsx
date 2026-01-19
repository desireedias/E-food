import ProductCard from '../ProductCard'
import { ListContainer } from './styles'
import Pizza from '../assets/images/foodImage.png'

const ProductList = () => (
  <div className="container">
    <ListContainer>
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
      <ProductCard
        foto={Pizza}
        nome="Pizza Marguerita"
        descricao="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
      />
    </ListContainer>
  </div>
)

export default ProductList
