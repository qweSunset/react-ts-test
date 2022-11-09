import { useContext } from "react";
import { CreateProduct } from "../components/createProduct";
import { ErrorMessage } from "../components/errorMessage";
import { Loader } from "../components/loader";
import { Modal } from "../components/modal";
import Product from "../components/product";
import { ModalContext } from "../context/modalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export const ProductsPage = () => {
    const {products, error, loading, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-[50%] pt-5">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {products.map(product => <Product product={product} key={product.id} />)}
        {modal && <Modal onClose={() => close()} title="Create product">
            <CreateProduct onCreate={createHandler}/>
        </Modal>}
        <button 
            className="fixed bottom-10 right-10 rounded-full bg-blue-400 text-white text-3xl px-[8px]"
            onClick={() => open()}
        >+</button>
        </div>
    );
}

export default ProductsPage;