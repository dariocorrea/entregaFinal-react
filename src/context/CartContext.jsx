import { createContext, useState, useEffect } from "react";
import NotFound from "../components/NotFound";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(false)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [search, setSearch] = useState("")

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {        
        try {
            //const res = await fetch('/data/products.json')
            const res = await fetch("https://68190f2d5a4b07b9d1d1d8e5.mockapi.io/fakeMatElectricos/api/v1/products")
            const data = await res.json()
            setTimeout(() => {
                setProducts(data)
                setSearchProducts(data)
                setLoad(false)
            }, 2000)
        } catch (error) {
            setLoad(false)
            setError(true)
        }
    }

    if (error) {
        return <NotFound />
    }

    const filterProduct = (textSearch) => {
        setSearch(textSearch)
        setSearchProducts(products)

        if (textSearch !== "") {
            setSearchProducts(products.filter(item => item.name.toLowerCase().includes(textSearch.toLowerCase())))
        }
    }

    const addToCart = (product) => {

        const productExist = cart.find(item => item.id === product.id)

        if (productExist) {
            let newCart = [...cart]

            newCart = newCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item)
            setCart([...newCart])
        }
        else {
            setCart([...cart, product])
        }

        setTotal(total + (product.price * product.quantity))
    }

    const removeFromCart = (product) => {

        let message = document.getElementById(`warning${product.id}`)

        if (message)
            message.hidden = true

        let newCart = [...cart]

        newCart = newCart.map((item) => item.id === product.id ?
            (item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } :
                null) :
            item);

        newCart = newCart.filter(item => item != null);

        setCart(newCart)
        setTotal(total - product.price)
    }

    const emptyCart = () => {

        let messages = document.querySelectorAll(".text-danger")
        messages.forEach(item => {
            item.hidden = true
        });

        setCart([])
        setTotal(0)
    }

    return (
        <CartContext.Provider
            value={
                {
                    load, loadProducts, filterProduct, searchProducts, search,
                    cart, total, addToCart, removeFromCart, emptyCart
                }
            }>
            {children}
        </CartContext.Provider>
    )
}