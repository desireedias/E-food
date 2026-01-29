import ProductCard from '../ProductCard'
import { ListContainer } from './styles'

import ProductModal from '../ProductModal'
import { useState } from 'react'

export interface Prato {
  id: number
  nome: string
  descricao: string
  porcao: string
  foto: string
  preco: number
}

type Props = {
  pratos: Prato[]
}

const ProductList = ({ pratos }: Props) => {
  const [modal, setModal] = useState({
    isVisible: false,
    data: null as Prato | null
  })

  if (!pratos || pratos.length === 0) {
    return <h3 className="container">Carregando...</h3>
  }
  return (
    <div className="container">
      <ListContainer>
        {pratos.map((item) => (
          <ProductCard
            key={item.id}
            foto={item.foto}
            nome={item.nome}
            descricao={
              item.descricao.length
                ? item.descricao.slice(0, 150) + '...'
                : item.descricao
            }
            onOpen={() => setModal({ isVisible: true, data: item })}
          />
        ))}
      </ListContainer>
      <ProductModal
        product={modal.data}
        isVisible={modal.isVisible}
        onClose={() => setModal({ isVisible: false, data: null })}
      />
    </div>
  )
}

export default ProductList
