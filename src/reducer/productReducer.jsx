
const ProductReducer = (state,action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "PRODUCTS_API":
            const featuredData = action.payload.filter((elem) => elem.featured === true )
            
            return {
                ...state,
                isLoading : false,
                isERROR : false,
                products: action.payload,
                featuredProducts : featuredData, 
            }

        case "SET_TITLE":
            // Action should include current location in the payload
            const titlePage = action.payload.location === '/about' 
            ? 'About eCommerce Store' 
            : 'eCommerce Store';
            return {
                ...state,
                title: titlePage,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading : false,
                isERROR : true,
            }

    
        default:
            break;
    }
    
    return state;
};


export default ProductReducer;