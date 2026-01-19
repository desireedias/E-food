import Banner from '../../Banner'
import HeaderPerfil from '../../HeaderPerfil'
import ProductList from '../../ProductList'
import CapaRestaurante from '../../assets/images/capaItaliana.png'
const Perfil = () => {
  return (
    <>
      <HeaderPerfil />
      <Banner
        capa={CapaRestaurante}
        categoria="italiana"
        nome="La Dolce Vita Trattoria"
      />
      <ProductList />
    </>
  )
}

export default Perfil
