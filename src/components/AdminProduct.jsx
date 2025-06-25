import Button from "./Button";

const AdminProduct = ({ product, setTypeModal, setModalCreateEditOpen, setSelectedProduct, deleteProduct, setErrors }) => {

    const editProduct = (product) => {
        setTypeModal("Editar Producto")
        setModalCreateEditOpen(true)
        setSelectedProduct(product)
        setErrors({})
    }

    return (
        <article className="product">
            <div className='images'>                
                <img className='imageProduct' src={product.image} alt={product.image}/>
            </div>
            <h4 className="name">{product.name}</h4>
            <div className="availabilty">
                <p>Disponibilidad:</p>
                <span className="stock">{product.stock} en Stock</span>
            </div>
            <h5 className="price">${product.price}</h5>
            <div>
                <Button classes="btn btn-success" buttonText="Editar Producto" onClick={() => editProduct(product)}></Button>
                <Button classes="btn btn-danger" buttonText="Eliminar Producto" onClick={() => deleteProduct(product.id)}></Button>
            </div>
      </article>
    );
};

export default AdminProduct;