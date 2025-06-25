import { useContext } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AdminProductList from '../components/AdminProductList'
import loading from '../assets/images/banner/loading.gif'
import { CartContext } from '../context/CartContext'

const AdminProducts = () => {

  const { load } = useContext(CartContext)

  return (
    <>
      <Header />
      <Nav />
      {
        load ? <img src={loading} alt='loading' /> :
          <AdminProductList />
      }
      <Footer />
    </>
  )
}

export default AdminProducts