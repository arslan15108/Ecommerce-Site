import React from 'react'

function ProductFilter({products}) {
    const categories = [...new Set(products.map(product => product.category))];
    
  return (
    <div className='filters-list'>
        <div className="search">
            <form>
                <input className='outline-none border border-gray-300 rounded-3xl transition-all duration-300 focus:outline-none focus:border-purple-600 focus:text-purple-600' type="search" placeholder='search' name="search" id="search" />
            </form>
        </div>
        <div className='categories'>
            <ul className="list-style-none p-4 capitalize">
                {categories.map((category)=>{
                    return <li className='font-bold font-poppins tracking-widest text-md my-2 cursor-pointer' key={category}>{category}</li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default ProductFilter