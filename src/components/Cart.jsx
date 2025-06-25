import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import Button from './Button'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Cart = () => {

    const { cart, total, emptyCart } = useContext(CartContext)
    const { role } = useContext(AuthContext)

    return (
        <>
            <div className="containerCartList">
                <h2>Carrito de Compras</h2>
                { cart.length === 0 ? (<p>El carrito esta vacio</p>) : 
                (
                    <>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                {/* <th>Total</th> */}
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                            {cart.map((product, index) => (
                                <CartProduct key={index} product={product}></CartProduct>
                            ))}
                    </table>
                    <h5 className="total">Total ${total.toFixed(2)}</h5>
                    <Button classes="btn btn-outline-danger" buttonText="Vaciar Carrito" onClick={emptyCart}></Button>
                    </>
                )  
                }
                <br/>
                <Link to="/" className="btn btn-outline-success">Seguir Comprando</Link>
                <br/>
                { cart.length !== 0 && role === "client"?
                    (<Link to="/pay" className="btn btn-light">Ir al Pago</Link>) : null
                }
            </div>
        </>
    )
}

export default Cart