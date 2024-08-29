import React from 'react'
import { HeroSection } from '../components'

function About() {
  const data = {
    title : "About Us",
  }
  return (
    <main>
      <HeroSection data={data} />
    </main>
  )
}

export default About