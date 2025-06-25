import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartProduct from './CartProduct'
import Button from './Button'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'
import Alert from './Alert'

const Payment = () => {

    const { cart, total, emptyCart } = useContext(CartContext)
    const { role } = useContext(AuthContext)

    const [modalAlertOpen, setModalAlertOpen] = useState(false)

    const pay = () => {
        setModalAlertOpen(true)
        emptyCart()
    }

    const closeAlert = () => {
        setModalAlertOpen(false)
    }

    return (
        <>
            <div className="containerCartList">
                <h2>Pago</h2>
                { cart.length === 0 ? (<p>El carrito esta vacio</p>) : 
                (
                    <>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                            {cart.map((product, index) => (
                                <CartProduct key={index} product={product}></CartProduct>
                            ))}
                    </table>
                    <h5 className="total">Total ${total.toFixed(2)}</h5>
                    </>
                )  
                }
                <br/>
                <Link to="/" className="btn btn-outline-success">Seguir Comprando</Link>
                <br/>
                { cart.length !== 0 && role === "client"?
                    (<button className="btn btn-light" onClick={pay}>Pagar</button>) : null
                }
            </div>
            {modalAlertOpen && (
                <Alert typeAlert="Basic" closeAlert={closeAlert} messageAlert="Pago realizado" ></Alert>
            )}
        </>
    )
}

export default Payment