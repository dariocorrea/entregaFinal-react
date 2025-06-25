import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartDrawer from './CartDrawer';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Nav = () => {
    
    const { filterProduct, search, cart } = useContext(CartContext)
    const { isAuthenticated, role } = useContext(AuthContext)

    const countProducts = cart.length

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">Galeria de Productos</NavLink>
                        </li>
                        {role === "admin" && (
                        <li className="nav-item">
                            <NavLink to="/adminproducts" className="nav-link" href="#">Administración de Productos</NavLink>
                        </li>)}
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" href="#">Sobre Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/contact" className="nav-link" href="#">Contacto</NavLink>
                        </li>
                        <li className="nav-item">                                            
                            <a className="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Carrito <span className="badge bg-primary rounded-pill">{countProducts}</span><i className="fa-solid fa-cart-shopping"></i></a>
                        </li>                        
                    </ul>
                    <form className="d-flex">
                        <input id="search" className="form-control me-sm-2" type="search" placeholder="Search" value={search} onChange={(e) => filterProduct(e.target.value)}/>
                        {/* <a className="btn btn-secondary my-2 my-sm-0" onClick={() => filterProduct()}>Search</a> */}
                    </form>
                </div>
            </div>
        </nav>
        
        <CartDrawer />
        </>
        )
    }

export default Nav