import React, { useContext } from 'react'
import ProductContext from '../../context/Context'
import {Product} from '../index'
import { ClockLoader } from 'react-spinners';

function ProductList() {
    const {products,isLoading} = useContext(ProductContext);
    
    return (
        isLoading  ?  <div className='flex justify-center py-20 bg-gray-200'>
            <ClockLoader color="#4740db" size='120px' />
          </div> :
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-3 justify-center items-center'>
        {
            products.map((product)=>{
                return <Product key={product.id} product={product} />
            })
        }
    </div>
  )
}

export default ProductList