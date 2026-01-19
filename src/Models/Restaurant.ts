class Restaurant {
  id: number
  title: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  constructor(
    id: number,
    title: string,
    destacado: boolean,
    tipo: string,
    avaliacao: number,
    descricao: string,
    capa: string
  ) {
    this.id = id
    this.title = title
    this.destacado = destacado
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.capa = capa
  }
}

export default Restaurant
