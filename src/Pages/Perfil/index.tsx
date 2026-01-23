import { useParams } from 'react-router-dom'
import Banner from '../../Banner'
import HeaderPerfil from '../../HeaderPerfil'
import ProductList, { Prato } from '../../ProductList'
import { useEffect, useState } from 'react'

interface Restaurante {
  id: number
  titulo: string
  tipo: string
  capa: string
  cardapio: Prato[]
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurante) => setRestaurante(data))
  }, [id])

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
