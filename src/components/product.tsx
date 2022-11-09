import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
    product: IProduct
}

export const Product = ({product}: ProductProps) => {
    const [details, setDetails] = useState(false)
    const BtnClassName = details ? 'py-2 px-4 border rounded bg-yellow-400' : 'py-2 px-4 border rounded bg-blue-400'
    return (
        <div>
            <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
                <img src={product.image} className="w-[10%]" alt={product.title} />
                <p>{product.title}</p>
                <span className="font-bold">{product.price}</span>
                <button 
                    className={BtnClassName}
                    onClick = {() => setDetails(!details)}
                >
                   {details ? 'Hide details' : 'Show Details'}
                </button>
                {details && <div>
                    {product.description}
                </div>}
            </div> 
        </div>
    )   
};

export default Product;