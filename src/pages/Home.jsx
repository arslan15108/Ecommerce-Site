import React from 'react'
import { HeroSection, Trusted , Features } from '../components'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'


function Home() {
  
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