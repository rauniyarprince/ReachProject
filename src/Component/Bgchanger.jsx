import React from 'react'
import { useState } from 'react'

function Bgchanger() {
  const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <h1 className='flex justify-center pt-60 font-bold text-3xl font-serif'>
  Color Tester
</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3
    py-2 rounded-3xl'>
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full cursor-pointer    shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300"'
            style={{ backgroundColor: "red" }}
          >Red</button>
          
           <button
            onClick={() => setColor("Yellow")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "Yellow" }}
          >Yellow</button>
          
          <button
            onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "blue" }}
          >Blue</button>
          <button
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "pink" }}
          >Pink</button>
            <button
            onClick={() => setColor("Orange")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "Orange" }}
          >Orange</button>
           <button
            onClick={() => setColor("White")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "White" }}
          >White</button>
    <button
            onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full cursor-pointer    shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "green" }}
          >Green</button>
           <button
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "purple" }}
          >Purple</button>
           <button
            onClick={() => setColor("Lavender")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "Lavender" }}
          >Lavender</button>
          <button
            onClick={() => setColor("Gray")}
            className='outline-none px-4 py-1 rounded-full  shadow-md
  hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]
  transition duration-300 cursor-pointer '
            style={{ backgroundColor: "Gray" }}
          >Gray</button>
        </div>
      </div>
    </div>
  )
}
export default Bgchanger;
