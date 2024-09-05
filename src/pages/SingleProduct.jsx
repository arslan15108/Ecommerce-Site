import React, { useContext, useEffect } from 'react'
import ProductContext from '../context/Context'
import { useParams } from 'react-router-dom'
import MyImage from '../components/MyImage/MyImage'
import { FormatPrice } from '../components'
import { TbReplace, TbTruckDelivery } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import { ClockLoader } from 'react-spinners'

function SingleProduct() {
  const API = "https://api.pujakaitem.com/api/products"
  const {id} = useParams();
  const {getSingleProduct,isLoading,singleProduct} = useContext(ProductContext);
  console.log(isLoading);
  
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,

  } = singleProduct;
  
  useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`)
  },[])
        return (
    isLoading  ?  <div className='flex justify-center py-20 bg-gray-200'>
        <ClockLoader color="#4740db" size='120px' />
      </div> :
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='productGallery grid grid-cols-2 py-5'>
            <div>
                <MyImage images={image} />
            </div>
            <div>
              <h2>{name}</h2>
              <p>{stars}</p>
              <p>{reviews} reviews</p>
              <p>MRP : <del className='font-bold'> <FormatPrice price={price +250000} /> </del></p>
              <p>Deal of the Day: <FormatPrice price={price} /></p>
              <p>{description}</p>
              <div className='grid grid-cols-3 gap-3'>
                <div className='text-center text-purple-500 bg-slate-300 rounded-lg py-3 my-3'>
                    <TbTruckDelivery className='text-2xl mx-auto' />
                    <p className='text-sm mt-2'>Free Deliver</p>
                </div>
                <div className='text-center text-purple-500 bg-slate-300 rounded-lg py-3 my-3'>
                    <TbReplace className='text-2xl mx-auto' />
                    <p className='text-sm mt-2'>30 Days Replacement</p>
                </div>
                <div className='text-center text-purple-500 bg-slate-300 rounded-lg py-3 my-3'>
                    <MdSecurity className='text-2xl mx-auto' />
                    <p className='text-sm mt-2'>2 Year Warranty</p>
                </div>
              </div>
                <hr className='my-4' />
                <p className='capitalize'>Available: <strong>{stock > 0 ? 'In Stock' : 'Out of Stock'}</strong></p>
                <p className='capitalize'>ID: <strong>{id}</strong></p>
                <p className='capitalize'>Brand: <strong>{company}</strong></p>
                <hr className='my-4' />

            </div>
        </div>
      </div>

    </div>
  )
}

export default SingleProduct