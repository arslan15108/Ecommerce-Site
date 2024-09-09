import React, { useContext } from 'react'
import { ProductFilter, ProductList, Sort } from '../components'
import ProductContext from '../context/Context'

function Products() {
  const {products} = useContext(ProductContext);
  return (
    <div className='grid grid-cols-3 max-w-[1300px] mx-auto py-12'>
      <div className='product-filters w-1/4'>
          <ProductFilter products={products} />
      </div>
      <div className='product-view--sort col-span-2'>
        <div className='sort-filters'>
          <Sort />
        </div>
          <div className='main-product'>
            <ProductList />
          </div>
      </div>
    </div>
  )
}

export default Products