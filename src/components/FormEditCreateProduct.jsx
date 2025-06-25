import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const FormEditCreateProduct = ({ typeModal, setModalCreateEditOpen, selectedProduct, sendForm, errors }) => {

    const [product, setProduct] = useState({
        image: '',
        name: '',
        price: '',
        stock: '',
        description: '',
    })

    if (selectedProduct) {
        useEffect(() => {
            setProduct(selectedProduct)
        }, [selectedProduct])
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    return (
        <form onSubmit={() => sendForm(event, product)}>
            <div className="consult-item">
                <label className="col-form-label mt-2" htmlFor="productImage">Imagen *</label>
                <input type="text" className="form-control" placeholder="Ingrese imagen" name="image" value={product.image} onChange={handleChange} required />
            </div>
            <div className="consult-item">
                <label className="form-label mt-2" htmlFor="productName">Nombre *</label>
                <input type="text" className="form-control" name="name" aria-describedby="productName" placeholder="Ingrese Nombre" value={product.name} onChange={handleChange} required />
            </div>
            <div className="consult-item">
                <label className="form-label mt-2" htmlFor="productPrice">Precio *</label>
                <input type="number" className="form-control" name="price" aria-describedby="productPrice" placeholder="Ingrese Precio" value={product.price} onChange={handleChange} required />
                {errors.price && (
                    <div className="text-danger">
                        {errors.price}
                    </div>
                )}
            </div>
            <div className="consult-item">
                <label className="form-label mt-2" htmlFor="productStock">Stock *</label>
                <input type="number" className="form-control" name="stock" aria-describedby="productStock" placeholder="Ingrese Stock" value={product.stock} onChange={handleChange} required />
                {errors.stock && (
                    <div className="text-danger">
                        {errors.stock}
                    </div>
                )}
            </div>
            <div>
                <label className="form-label mt-2" htmlFor="productDescription" >Descripción</label>
                <textarea className="form-control" name="description" rows="3" value={product.description} onChange={handleChange} ></textarea>
            </div>
            <div className="formButtonEditCancel">
                <button className="btn btn-primary">{typeModal}</button>
                <button className="btn btn-success" onClick={() => setModalCreateEditOpen(false)}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormEditCreateProduct