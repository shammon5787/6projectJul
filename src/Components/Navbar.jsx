import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row lg:items-center justify-between m-6'>
        <div>
            <h1 className=' text-3xl font-bold text-slate-700'>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='uppercase text-3xl font-bold text-slate-700'>Pizza Center Gilgit</h1>
        </div>
        <div>
            <input className='p-2 w-full md:w-[30vw] border outline-none rounded-md' type="search" name="search" id="" placeholder='search here' />
        </div>
    </div>
  )
}

export default Navbar