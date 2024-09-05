import React from 'react'
import { NavLink } from 'react-router-dom';
import {FormatPrice} from '../index';

const Product = ({product}) => {
  const {id,name,price,image,category} = product;
  return (
    <NavLink to={`/singleproduct/${id}`}>
       <div
          key={id}
          className='group cursor-pointer relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
          <figure className='relative'>
            <img className='group-hover:scale-110 transition-all duration-300' src={image} />
            <figcaption className='absolute top-0 right-0 bg-purple-600 text-white px-5 py-1 rounded-3xl mt-4 mr-3 shadow-sm shadow-purple-300  group-hover:shadow-lg group-hover:shadow-purple-300 transition-all duration-300'>{category}</figcaption>
          </figure>
          <div className="mt-8 flex justify-between">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              {name}
            </h3>
            <p className='font-bold font-mono tracking-wide text-gray-500'>
              {
              <FormatPrice price={price} />
              }
            </p>
          </div>
        </div>
    </NavLink>
  )
}

export default Product