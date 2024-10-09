"use client"
import { useState } from "react"
import styles from "../NavBar/navbar.css"

import VoiceInput from "../voice-input"
const Hero = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="bg-white py-10 px-4 dark:bg-dark dark:text-white pt-28 ">
    
    <div className="container mx-auto text-center">
      <h2 className="text-4xl md:text-4xl font-bold  mb-4">
        SHAHADA
      </h2>

      <p className=" text-2xl mb-4 capitalize">
        Your first step on your path to islam.
      </p>

      <p className=" text-xl mb-6 capitalize">
      Are you ready to say the Shahada ?
      </p>
      <button onClick={()=>setOpen(false)} className="bg-red-600 rounded-full p-2 w-12 ">No</button>
      <button onClick={()=>setOpen(true)} className="bg-green-600 rounded-full p-2 ml-5 ">Yes , I Love It ❤️ </button>
      {open &&(
        <VoiceInput/>
      )}
    </div>
  </section>
  )
}

export default Hero
