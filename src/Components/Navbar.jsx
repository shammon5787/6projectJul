import React from 'react'

const Navbar = () => {
  return (
    <div className='m-6 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <div>
            <h1 className='text-slate-700 text-3xl font-bold'> {new Date().toUTCString().slice(0,16)} </h1>
            <h1 className='text-slate-700 text-3xl font-bold uppercase'>welcome to our new fastfood center</h1>
        </div>
        <input className='p-2 w-full lg:w-[25vw] border outline-none rounded-md ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar