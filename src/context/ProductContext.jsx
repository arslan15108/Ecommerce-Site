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
        <ProductContext.Provider value={{...state,updateTitle}}>
            {children}
        </ProductContext.Provider>

    )
}


export default ProductProvider