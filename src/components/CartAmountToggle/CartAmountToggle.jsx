import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

function CartAmountToggle({stock,amount,setDecrease,setIncrease}) {
  return (
    <div className='flex items-center gap-3 mt-4'>
        {
            amount > 1 ? 
        <button onClick={()=>setDecrease()} className= { `border px-2 py-1 transition-all duration-300 ${amount === 1 ? 'border-gray-300 text-gray-400' : 'border-purple-600 px-2 py-1 text-purple-600 hover:bg-purple-700 hover:text-white'} ` } disabled = {`${amount === 1 ? 'disabled' : ''}`} > <FiMinus /> </button>
        : <button className='transition-all duration-300'></button>
        }
        <p className='font-bold font-mono text-md'>{amount}</p>
        <button onClick={()=>setIncrease()} className= { `border px-2 py-1 transition-all duration-300 ${amount === stock ? 'border-gray-300 text-gray-400' : 'border-purple-600 px-2 py-1 text-purple-600 hover:bg-purple-700 hover:text-white'} ` } disabled = {`${amount === stock ? 'disabled' : ''}`}> <FiPlus /> </button>
    </div>
  )
}

export default CartAmountToggle