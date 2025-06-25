import { useState, useContext } from "react";
import AdminProduct from "./AdminProduct";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import FormEditCreateProduct from "./FormEditCreateProduct";
import Alert from "./Alert";
import { AdminContext } from "../context/AdminContext";

const AdminProductList = () => {

    const { searchProducts } = useContext(CartContext)
    const { addProduct, typeModal, setTypeModal, modalCreateEditOpen, setModalCreateEditOpen, setSelectedProduct, deleteProduct, errors, setErrors,
            selectedProduct, sendForm, modalAlertOpen, typeAlert, closeAlert, messageAlert, confirmAlert, closeModal } = useContext(AdminContext)


    const itemsPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(searchProducts.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProducts = searchProducts.slice(startIndex, endIndex)

    const advancePage = () => {
        setCurrentPage(currentPage + 1)
    }

    const backPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const changePage = (page) => {
        if (currentPage !== page) {
            setCurrentPage(page)
        }
    }

    const fillPagination = () => {

        const numPages = Array.from({ length: totalPages }, (_, i) => i + 1);

        const itemsPage = numPages.map((item, index) => {
            let classActivePage = "page-item"
            if (currentPage === item) {
                classActivePage = "page-item active"
            }

            return <li key={index} className={classActivePage}>
                <a className="page-link" href="#" onClick={() => changePage(item)}>{item}</a>
            </li>
        })

        let classActiveBack = "page-item"
        if (currentPage === 1) {
            classActiveBack = "page-item disabled"
        }

        let classActiveAdv = "page-item"
        if (currentPage === totalPages) {
            classActiveAdv = "page-item disabled"
        }

        return <div className="customPagination">
            <span>{`Página ${currentPage} de ${totalPages}`}</span>
            <ul className="pagination">
                <li className={classActiveBack}>
                    <a className="page-link" href="#" onClick={() => backPage()}>&laquo;</a>
                </li>
                {itemsPage}
                <li className={classActiveAdv}>
                    <a className="page-link" href="#" onClick={() => advancePage()}>&raquo;</a>
                </li>
            </ul>
        </div>
    }

    return (
        <div className="containerProducts">
            <div className="results">
                <Button classes="btn btn-primary" buttonText="Crear Producto" onClick={() => addProduct()}></Button>
            </div>
            <div className="containerProductList">
                {
                    currentProducts.map((product, index) => (
                        <AdminProduct key={index} product={product} setTypeModal={setTypeModal} setModalCreateEditOpen={setModalCreateEditOpen} setSelectedProduct={setSelectedProduct} deleteProduct={deleteProduct} setErrors={setErrors} />
                    ))
                }
            </div>
            {
                fillPagination()
            }

            {modalCreateEditOpen && (
                <div style={{ display: "block" }} className="modal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{typeModal}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="modal-body" style={{ textAlign: "left" }}>
                                <FormEditCreateProduct typeModal={typeModal} setModalCreateEditOpen={setModalCreateEditOpen} selectedProduct={selectedProduct} sendForm={sendForm} errors={errors}/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modalAlertOpen && (
                <Alert typeAlert={typeAlert} closeAlert={closeAlert} messageAlert={messageAlert} confirmAlert={confirmAlert}></Alert>
            )}
        </div>
    );
};

export default AdminProductList;