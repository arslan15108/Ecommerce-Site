import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav({navigation}) {
    
    // const [navigation,setNavigation] = useState([
    //     { name: 'Home', href: '/', current: true },
    //     { name: 'About', href: '/about', current: false },
    //     { name: 'Products', href: '/products', current: false },
    //     { name: 'Contact', href: '/contact', current: false },
    //   ])
  return (
        <div className='hidden gap-x-8 lg:flex'>
            {navigation.map((navItem,index)=> (
                <Link 
                key={index}
                className={`${navItem.current ? 'text-purple-500' : ''} text-white text-lg font-mono hover:text-purple-400 hover:text-xl transition-all duration-300`} 
                to={navItem.href}>
                    {navItem.name}
                </Link> 
            ))}
        </div> 
        
    )
}

export default Nav