import React from 'react'
import { HeroSection, Trusted , Features } from '../components'


function Home() {
  const data = {
    title : 'eCommerce Store'
  }
  return (
    <main>
      <HeroSection data = {data} />
      <Trusted />
      <Features />
    </main>
  )
}

export default Home