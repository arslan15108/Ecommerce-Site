import React, { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'
import logo from '../../../public/logo-transparent.webp'
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { ulVarients , navItemVarients } from '../FramerMotion/FramerMotion';






function Header() {
  const [toggleNav,SetToggleNav] = useState(false);
  const location = useLocation();

  
  const [navigation,setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Products', href: '/products', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ])
  // variants for navbar animation closing & opening
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }



  const handleToggle = () => {
    SetToggleNav( prev => !prev)
  }


  useEffect(()=> {
    setNavigation(navigation.map(navItem => ({
      ...navItem,
      current: navItem.href === location.pathname
    })) )

  },[location.pathname])



  return (
      <nav className="w-full py-3 bg-black block">
        <div className='px-8 xl:px-0 max-w-6xl flex justify-between items-center mx-auto'>
          <Link className='' to={'/'}> 
            <img className='w-16 lg:w-[100px]' src={logo} />
          </Link>
          <Nav navigation={navigation} />
          <Link className='relative hidden lg:block' to={'/cart'}>
            <FaCartShopping className='text-white text-2xl hover:text-purple-400 transition-all duration-300' />
            <span className='cart-total text-white text-sm absolute top-[-10px] right-[-20px] bg-red-500 px-1 py-0 flex items-center justify-center rounded-full'>10</span>
          </Link>
          <FaBars 
          onClick={handleToggle}
          className='text-white text-2xl block lg:hidden cursor-pointer' />
        </div>
        <motion.div 
        //  animate = {toggleNav ? "open" : "closed"}
        animate= {toggleNav ? variants.open : variants.closed}
        variants={{variants}}
        transition={{duration : .5}}
        className='mobile-navigation flex flex-col items-center justify-center lg:hidden absolute bg-black w-full h-full top-0 z-10'>
        <motion.ul 
        animate = {toggleNav ? ulVarients.open : ulVarients.closed}
        variants={ulVarients}>
            {
                navigation.map((navItem,index)=> (
                    <Link 
                    onClick={()=>SetToggleNav(false)}
                    key={index} 
                    className = {`${navItem.current ? 'text-purple-500' : ''} text-white text-xl tracking-widest my-2 font-bold font-mono hover:text-purple-500 hover:text-xl transition-all duration-300`} 
                    to={navItem.href}>
                      <motion.li
                        custom={index}
                        animate = {toggleNav ? navItemVarients.open : navItemVarients.closed}
                        variants={navItemVarients}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {navItem.name}
                      </motion.li>
                    </Link> 
                ))
            }

        </motion.ul>
        
        <IoCloseCircleOutline 
        onClick={handleToggle}
        className='absolute top-0 right-0 mr-14 mt-20 text-3xl text-white hover:text-purple-500 hover:text-4xl transition-all duration-300 cursor-pointer' />
        </motion.div>
      </nav>

  )
}

export default Header