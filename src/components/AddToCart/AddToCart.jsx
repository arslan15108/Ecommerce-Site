import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6';
import { CartAmountToggle } from '../';
import { NavLink } from 'react-router-dom';

function AddToCart({ product }) {
    const {id,colors,stock} = product;
    
    const [color,setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : setAmount(1) 
    }
    const setIncrease = () =>{
        amount < stock ? setAmount(amount + 1) : setAmount(stock) 

    }
    
  return (
    <div>
        <div className="flex gap-2">
            <p>
                Colors:
            </p>
            <ul className='flex gap-3'>
                {
                    colors.map(
                        (currentColor,i)=> (
                        <li 
                        onClick={()=> setColor(currentColor) }
                        style={{background: `${currentColor}`}} 
                        className={`cursor-pointer text-white flex items-center justify-center rounded-full w-6 h-6 ${currentColor === color ? "opacity-100": "opacity-10"} `} 
                        key={i}>
                            {color === currentColor ? <FaCheck /> : null}
                        </li>
                    ))
                }
            </ul>
        </div>
        <CartAmountToggle
        stock = {stock}
        amount = {amount}
        setDecrease = {setDecrease}
        setIncrease = {setIncrease}
        />
        <NavLink to={'/cart'} >
            <button
            className='btn bg-purple-500 text-white px-6 py-2 rounded-3xl mt-5 border border-purple-500 transition-all duration-300 hover:bg-transparent hover:text-purple-500'>
            Add To Cart
            </button>
        </NavLink>
    </div>
  )
}

export default AddToCart