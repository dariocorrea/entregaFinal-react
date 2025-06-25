import { useState, useContext } from "react";
import Product from "./Product";
import { CartContext } from "../context/CartContext";

const ProductList = () => {

    const { searchProducts } = useContext(CartContext)

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

    const fillPagination = () =>  {

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
                <span className="badge bg-primary">{`${searchProducts.length} resultados`}</span>
            </div>
            <div className="containerProductList">
            {
                currentProducts.map((product, index) => (
                    <Product key={index} product={product} />
                ))
            }
            </div>               
            {
                fillPagination()
            }
        </div>
    );
};

export default ProductList;