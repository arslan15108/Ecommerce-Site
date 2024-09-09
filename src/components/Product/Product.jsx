import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import {FormatPrice} from '../index';

const Product = ({product}) => {
  const {id,name,price,image,category} = product;
  
  return (
    <NavLink className="h-full" to={`/singleproduct/${id}`}>
       <div
          key={id}
          className= 'bg-white group cursor-pointer shadow-md relative p-3 rounded-md h-full focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
          <figure className='relative overflow-hidden rounded-t-md min-h-40'>
            <img className='group-hover:scale-110 transition-all duration-300 min-h-40' src={image} />
            <figcaption className='absolute top-0 right-0 bg-purple-600 text-white px-5 py-1 rounded-3xl mt-4 mr-3 shadow-sm shadow-purple-300  group-hover:shadow-lg group-hover:shadow-purple-300 transition-all duration-300'>{category}</figcaption>
          </figure>
          <div className=" pt-4 px-5 rounded-b-md">
            <h3 className="text-base font-semibold leading-6 text-gray-900 transition-all duration-300 group-hover:text-purple-600 ">
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