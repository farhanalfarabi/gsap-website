import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
        <h1 className='text-4xl text-indigo-300'>Hello World</h1>
    </div>
  )
}

export default App