import { useParams } from 'react-router-dom'
import Banner from '../../Banner'
import HeaderPerfil from '../../HeaderPerfil'
import ProductList from '../../ProductList'
import { useGetPratosQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetPratosQuery(id || '')

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={restaurante.capa}
        categoria={restaurante.tipo}
        nome={restaurante.titulo}
      />
      <ProductList pratos={restaurante.cardapio} />
    </>
  )
}

export default Perfil
