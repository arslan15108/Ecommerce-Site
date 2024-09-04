import { useEffect, useReducer, useState } from "react"
import ProductContext from "./Context"
import axios from "axios";
import reducer from "../reducer/productReducer"


const api = "https://api.pujakaitem.com/api/products";
    
export const initialState = {
    title : '',
    isLoading : false,
    isError : false,
    products: [],
    featuredProducts : [],
    isSingleLoading : false,
    singleProduct : {},
}

const ProductProvider = ({children}) => {
 
    const [state,dispatch] = useReducer(reducer, initialState);

    const [title,setTitle] = useState('');
    // const [products,setProducts] = useState();
    
 

   const getProducts = async (url) => {
    dispatch({type:'SET_LOADING'})
       try {
         const response = await axios.get(url);
         const products = await response.data;
         dispatch({type:'PRODUCTS_API',payload: products});
       } catch (error) {
            dispatch({type:'API_ERORR'})
       }
        // setProducts(products);   
    }

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"})
        try {
            const response = await axios.get(url);
            const singleProduct = await response.data;
            
            dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleProduct})
        } catch (error) {
            dispatch({type: "API_SINGLE_ERROR"})
        }
    }


    useEffect(()=>{
        getProducts(api);
        getSingleProduct(api);
    },[])

     const updateTitle = (location) => {
        dispatch({type: 'SET_TITLE', payload: location});
    }

    // const context = {
    //     title,
    //     setTitle,
    // }

    return (
        <ProductContext.Provider value={{...state,updateTitle,getSingleProduct}}>
            {children}
        </ProductContext.Provider>

    )
}


export default ProductProvider