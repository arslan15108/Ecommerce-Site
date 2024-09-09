import { ClockLoader } from 'react-spinners';
import { useContext } from 'react'
import ProductContext from '../../context/Context'
import {Product} from '../index'
  
  
  export default function FeaturedProducts() {

    const {isLoading, featuredProducts } = useContext(ProductContext);
    console.log(featuredProducts,isLoading);

    
    if (isLoading) {
      return <div className='flex justify-center py-20 bg-gray-200'>
        <ClockLoader color="#4740db" size='120px' />
      </div>
    }

    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow">
        <div className='title'>
            <h3 className='text-center text-4xl font-bold tracking-widest font-mono mt-20'>Featured Products</h3>
        </div>
        <div className='lg:max-w-screen-lg mx-auto mt-10 mb-20 sm:grid  sm:content-between sm:grid-cols-3 sm:gap-5 sm:divide-y-0'>
            {featuredProducts.map((product,index) => (
              <Product key={index} product={product} />
            ))}
        </div>
      </div>
    )
  }
  