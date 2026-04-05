import React, { useState } from 'react'

function Bgchanger() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className='w-full h-screen duration-200 flex flex-col items-center justify-center'
      style={{ backgroundColor: color }}
    >
      {/* Heading */}
      <h1 className='font-bold text-3xl sm:text-4xl font-serif mb-10 text-center'>
        Color Tester
      </h1>

      {/* Buttons Container */}
      <div className='fixed bottom-10 inset-x-0 flex justify-center px-4'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl max-w-[95%] overflow-x-auto'>

          {/* Button Template */}
          <button
            onClick={() => setColor("red")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "red", color: "white" }}
          >Red</button>

          <button
            onClick={() => setColor("yellow")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "yellow", color: "black" }}
          >Yellow</button>

          <button
            onClick={() => setColor("blue")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "blue", color: "white" }}
          >Blue</button>

          <button
            onClick={() => setColor("pink")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "pink", color: "black" }}
          >Pink</button>

          <button
            onClick={() => setColor("orange")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "orange", color: "black" }}
          >Orange</button>

          <button
            onClick={() => setColor("white")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)] border'
            style={{ backgroundColor: "white", color: "black" }}
          >White</button>

          <button
            onClick={() => setColor("green")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "green", color: "white" }}
          >Green</button>

          <button
            onClick={() => setColor("purple")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "purple", color: "white" }}
          >Purple</button>

          <button
            onClick={() => setColor("lavender")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "lavender", color: "black" }}
          >Lavender</button>

          <button
            onClick={() => setColor("gray")}
            className='px-3 sm:px-4 py-1 text-sm sm:text-base rounded-full shadow-md cursor-pointer transition duration-300 hover:shadow-[0_6px_12px_rgba(0,0,0,0.7)]'
            style={{ backgroundColor: "gray", color: "white" }}
          >Gray</button>

        </div>
      </div>
    </div>
  )
}

export default Bgchanger