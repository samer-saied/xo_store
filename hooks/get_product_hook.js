
import { useEffect, useRef, useState } from "react";
import { GetOneProduct } from "../repository/products_repository"


const useGetOneProductHook = (productId) => {

    const [product, setProduct] = useState(null);
    const fetchDataRef = useRef(false);

    useEffect(() => {
        if (!fetchDataRef.current) {
            GetOneProduct(productId).then((productData) => {
                setProduct(productData);
            });
            fetchDataRef.current = true;
        }
    }, [productId]);
    return product;

}

export default useGetOneProductHook;


