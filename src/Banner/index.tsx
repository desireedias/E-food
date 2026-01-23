import { Categoria, Imagem, TituloBanner } from './styles'

type Props = {
  nome: string
  categoria: string
  capa: string
}

const BannerPerfil = ({ nome, categoria, capa }: Props) => {
  return (
    <Imagem foto={capa}>
      <div className="container">
        <Categoria>{categoria}</Categoria>
        <TituloBanner>{nome}</TituloBanner>
      </div>
    </Imagem>
  )
}
export default BannerPerfil
