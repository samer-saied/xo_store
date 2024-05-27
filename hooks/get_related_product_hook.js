
import { useEffect, useRef, useState } from "react";
import { GetProductsByCategory } from "../repository/products_repository"


const useGetRelatedProductHook = (categoryId) => {

    const [product, setProduct] = useState(null);
    const fetchDataRef = useRef(false);

    useEffect(() => {
        if (!fetchDataRef.current) {
            GetProductsByCategory(categoryId).then((productData) => {
                setProduct(productData);
            });
            fetchDataRef.current = true;
        }
    }, [categoryId]);
    return product;

}

export default useGetRelatedProductHook;


