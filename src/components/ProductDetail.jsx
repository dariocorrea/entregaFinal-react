import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Button from './Button'
import { CartContext } from '../context/CartContext'

const ProductDetail = () => {

    const { searchProducts, cart, addToCart } = useContext(CartContext)

    const [quantityProd, setQuantityProd] = useState(1)
    const [hiddenProp, setHiddenProp] = useState(true)

    const {id} = useParams()

    const product = searchProducts.find(product => product.id === id)

    const decrease = () => setQuantityProd(prev => (prev > 1 ? prev - 1 : 1));

    const increase = () => {
        const productExist = cart.find(item => item.id === product.id)

        if ((productExist && productExist.quantity + (quantityProd+1)) > product.stock) {
            let disp = product.stock - productExist.quantity <= 0 ? 1 : product.stock - productExist.quantity

            setHiddenProp(false)
            setQuantityProd(disp)
        }
        else {
            setHiddenProp(true)
            setQuantityProd(prev => (prev != product.stock ? prev + 1: prev))
        }
    }

    const validateStock = () => {
        const productExist = cart.find(item => item.id === product.id)

        if ((productExist && productExist.quantity + (quantityProd)) > product.stock) {
            let disp = product.stock - productExist.quantity <= 0 ? 1 : product.stock - productExist.quantity
            
            setHiddenProp(false)
            setQuantityProd(disp)
        }
        else {            
            setHiddenProp(true)
            addToCart({...product, quantity:quantityProd})
        }
    }

    return (
        <>
            <Header />
            <Nav />
            { product ? (
            <div className="productDetail">
                <div>                    
                    <img className='imageDetail' src={product.image} alt={product.image} />
                </div>
                <div className="descriptionDetail">
                    <h4 className="name">{product.name}</h4>
                    <div className="availabilty">
                        <p>Disponibilidad:</p>
                        <span className="stock">{product.stock} en Stock</span>
                    </div>
                    <h5 className="price">${product.price}</h5>
                
                    <div className="quantity">
                        <button onClick={decrease}>-</button>
                        <input className="inputQuantity" type="text" value={quantityProd} readOnly/>
                        <button onClick={() => increase()}>+</button>
                    </div>
                    <div id={`warning${product.id}`} className="text-danger" hidden={hiddenProp}>
                        <p>Ya existe producto en carrito y supera el stock disponible</p>
                    </div>
                    <Button classes="btn btn-info" buttonText="Agregar al Carrito" onClick={() => validateStock()}></Button>

                    <h4 className="description">Descripción del producto:</h4>
                    <p>{product.description}</p>
                </div>
            </div>) :
            (<p>Producto no encontrado</p>) }
            <Footer /> 
        </>        
    )
}

export default ProductDetail