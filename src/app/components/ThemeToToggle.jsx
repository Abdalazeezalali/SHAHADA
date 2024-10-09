"use client"
import { RiMoonClearFill } from "react-icons/ri";
import {BsSunFill} from"react-icons/bs"
import { useState,useEffect } from "react";

const ThemeToToggle = () => {
    const [darkMode,setDarkMode]=useState(true)
    useEffect(() => {
     const theme=localStorage.getItem("theme")
     if(theme==="dark"){
        setDarkMode(true)
     }
    }, [])
    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }
        else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    }, [darkMode])
  return (
    <div className="relative w-16 h-8 flex items-center dark:bg-gray-900 bg-gray-50 cursor-pointer rounded-full p-1" onClick={ () => setDarkMode(!darkMode)}>
    <RiMoonClearFill className=" text-gray-900 hover:text-indigo-500 transition-colors duration-300" size={18}/>
    <div className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={darkMode ?{left:"2px"}:{right:"2px"}}>
    </div>
    <BsSunFill className="ml-auto text-yellow-400 hover:text-indigo-500 transition-colors duration-300" size={18}/>
    </div>
  )
}

export default ThemeToToggle
