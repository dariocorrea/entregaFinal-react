import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import Button from './Button'
import { CartContext } from '../context/CartContext'

const CartDrawer = () => {

    const { cart, total, emptyCart } = useContext(CartContext)

    const onCloseDrawer = (e) => {
        document.getElementsByClassName("btn-close text-reset")[0].click()
    }

    return (
        <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Carrito de Compras</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    { cart.length === 0 ? (<p>El carrito esta vacio</p>) : 
                    (
                    <>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                                {cart.map((product, index) => (
                                    <CartProduct key={index} product={product}></CartProduct>
                                ))}
                        </table>
                        <h5 className="total">Total ${total.toFixed(2)}</h5>
                        <Button classes="btn btn-outline-danger" buttonText="Vaciar Carrito" onClick={emptyCart}></Button>
                        <br/>
                        {/* <Button classes="btn btn-outline-primary" buttonText="Finalizar Compra" onClick={() => { goToCart(); onCloseDrawer();}}></Button> */}                        
                        <Link to="/finalizepurchase" className="btn btn-outline-primary" onClick={() => {onCloseDrawer()}}>Finalizar Compra</Link>
                    </>
                    )  
                    }
                </div>
            </div>
        </>
    )
}

export default CartDrawer