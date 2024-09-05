import { useEffect, useReducer, useState } from "react"
import ProductContext from "./Context"
import axios from "axios";
import reducer from "../reducer/productReducer"



export const initialState = {
    title : '',
    isLoading : false,
    isError : false,
    products: [],
    featuredProducts : [],
    isSingleLoading : false,
    isSingleError: false,
    singleProduct : {},
    
}

const ProductProvider = ({children}) => {
    const api = "https://api.pujakaitem.com/api/products";
    
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
        try {
            dispatch({type: "SET_LOADING"})
            const response = await axios.get(url);
            const singleProduct = await response.data;
            dispatch({type: 'SET_SINGLE_PRODUCT', payload: singleProduct})
        } catch (error) {
            dispatch({type: "API_ERORR"})
        }
    }


    useEffect(()=>{
        getProducts(api);

    },[])

     const updateTitle = (location) => {
        dispatch({type: 'SET_TITLE', payload: location});
    }

    // const context = {
    //     title,
    //     setTitle,
    // }

    return (
        <ProductContext.Provider value={{...state,updateTitle,getProducts,getSingleProduct,api}}>
            {children}
        </ProductContext.Provider>

    )
}


export default ProductProvider