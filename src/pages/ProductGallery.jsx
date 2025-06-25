import { useContext } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import '../components/styles/CustomStyles.css'
import loading from '/images/banner/loading.gif'
import ProductList from '../components/ProductList'
import { CartContext } from '../context/CartContext'

const ProductGallery = () => {

    const { load } = useContext(CartContext)

    return (
        <>
          <Header />
          <Nav />
          {
            load ? <img src={loading} alt='loading' /> :
              <ProductList />
          }          
          <Footer/>
        </>
    )
}

export default ProductGallery