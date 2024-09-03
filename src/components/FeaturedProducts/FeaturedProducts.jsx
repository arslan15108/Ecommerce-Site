import {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import ProductContext from '../../context/Context'
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function FeaturedProducts() {

    const { featuredProducts } = useContext(ProductContext);


    return (
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow">
        <div className='title'>
            <h3 className='text-center text-4xl font-bold tracking-widest font-mono mt-20'>Featured Products</h3>
        </div>
        <div className='lg:max-w-screen-lg mx-auto mt-10 mb-20 sm:grid sm:content-between sm:grid-cols-3 sm:gap-px sm:divide-y-0'>
            {featuredProducts.map((product) => (
            <div
                key={product.id}
                className={classNames(
                'group cursor-pointer relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
                )}
            >
                <div>
                    <img src={product.image} />
                </div>
                <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                        {product.name}
                </h3>
                
                </div>
            </div>
            ))}
        </div>
      </div>
    )
  }
  