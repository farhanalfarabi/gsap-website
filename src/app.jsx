import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)
import Navbar from './components/navbar'
import Hero from './components/hero'
const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default App