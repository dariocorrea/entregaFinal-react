import { createContext, useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";


export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {

    const { loadProducts } = useContext(CartContext)

    const apiUrl = 'https://68190f2d5a4b07b9d1d1d8e5.mockapi.io/fakeMatElectricos/api/v1/products'

    const [modalCreateEditOpen, setModalCreateEditOpen] = useState(false)
    const [modalAlertOpen, setModalAlertOpen] = useState(false)
    const [messageAlert, setMessageAlert] = useState("")
    const [selectedProduct, setSelectedProduct] = useState()
    const [typeModal, setTypeModal] = useState("")
    const [typeAlert, setTypeAlert] = useState("")
    const [idProdDelete, setIdProdDelete] = useState("")
    const [errors, setErrors] = useState({});

    // const itemsPerPage = 8
    // const [currentPage, setCurrentPage] = useState(1)
    // const totalPages = Math.ceil(searchProducts.length / itemsPerPage)
    // const startIndex = (currentPage - 1) * itemsPerPage
    // const endIndex = startIndex + itemsPerPage
    // const currentProducts = searchProducts.slice(startIndex, endIndex)

    const addProduct = () => {
        setSelectedProduct(null)
        setTypeModal("Crear Producto")
        setModalCreateEditOpen(true)
        setErrors({})
    }

    const closeModal = () => {
        setModalCreateEditOpen(false)
    }

    const closeAlert = () => {
        setModalAlertOpen(false)
    }

    const validateProductFields = (product) => {

        let result = true

        if (product.price <= 0) {
            setErrors({ price: 'El precio debe ser mayor a cero' })
            result = false
        }
        if (product.stock <= 0) {
            setErrors({ stock: 'El stock debe ser mayor a cero' })
            result = false
        }
        if (!Number.isInteger(parseFloat(product.stock))) {
            setErrors({ stock: 'El stock debe ser un valor entero' })
            result = false
        }

        return result
    }


    const sendForm = async (event, product) => {
        event.preventDefault()

        if (validateProductFields(product)) {

            if (typeModal === "Editar Producto") {
                await updateProduct(product)
            }
            else {
                await createProduct(product)
            }

            await loadProducts()
            setModalCreateEditOpen(false)
        }
    }

    const updateProduct = async (product) => {
        try {
            const response = await fetch(`${apiUrl}/${product.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product)
                })

            if (!response.ok)
                throw Error('Error al actualizar el producto')

            const data = await response.json()

            setTypeAlert("Basic")
            setMessageAlert("Producto actualizado correctamente")
            setModalAlertOpen(true)
        } catch (error) {
            setTypeAlert("Basic")
            setMessageAlert(error.message)
            setModalAlertOpen(true)
        }
    }

    const createProduct = async (product) => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            if (!response.ok) {
                throw new Error('Error al agregar producto')
            }
            const data = await response.json()

            setTypeAlert("Basic")
            setMessageAlert("Producto agregado correctamente")
            setModalAlertOpen(true)

        } catch (error) {
            setTypeAlert("Basic")
            setMessageAlert(error.message)
            setModalAlertOpen(true)
        }
    }

    const confirmAlert = async () => {
        try {
            const respuesta = await fetch(`${apiUrl}/${idProdDelete}`, {
                method: 'DELETE',
            })
            if (!respuesta.ok)
                throw Error('Error al eliminar')

            setTypeAlert("Basic")
            setMessageAlert("Producto eliminado correctamente")
            setModalAlertOpen(true)
            await loadProducts()
        } catch (error) {
            setTypeAlert("Basic")
            setMessageAlert(error.message)
            setModalAlertOpen(true)
        }
    }

    const deleteProduct = async (id) => {
        setIdProdDelete(id)
        setTypeAlert("Confirm")
        setMessageAlert("Está seguro de eliminar el producto?")
        setModalAlertOpen(true)
    }

    return (
        <AdminContext.Provider
            value={
                {
                    addProduct, typeModal, setTypeModal, modalCreateEditOpen, setModalCreateEditOpen, setSelectedProduct, deleteProduct, errors, setErrors,
                    selectedProduct, sendForm, modalAlertOpen, typeAlert, closeAlert, messageAlert, confirmAlert, closeModal 
                }
            }>
            {children}
        </AdminContext.Provider>
    )
}
