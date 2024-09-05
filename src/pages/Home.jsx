import React, { useContext, useEffect } from 'react'
import { HeroSection, Trusted , Features } from '../components'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import ProductContext from '../context/Context'


function Home() {
    const {api,getProducts} = useContext(ProductContext);

    useEffect(()=>{
        getProducts(api);
    },[])

  return (
    <main>
      <HeroSection  />
      <Trusted />
      <FeaturedProducts />
      <Features />
    </main>
  )
}

export default Home