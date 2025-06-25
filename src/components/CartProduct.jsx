import { useContext } from 'react'
import { CartContext } from "../context/CartContext";

const CartProduct = ({ product }) => {

    const { removeFromCart } = useContext(CartContext)

    return (
        <tbody>
			<tr>
				<td>{product.name}</td>
				<td><span>${product.price}</span></td>
                <td><span>{product.quantity}</span></td>
                {/* <td><span>{product.price * product.quantity}</span></td> */}
                <td><button className="btn btn-outline-success" onClick={() => removeFromCart(product)}><i className="fa-solid fa-trash"></i></button></td>                
			</tr>
        </tbody>
        
    );
};

export default CartProduct;