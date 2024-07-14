import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
        <div className='gap-3'>
            <h1 className='text-slate-700 font-bold text-3xl'> {new Date().toUTCString().slice(0 ,16)} </h1>
            <h1 className='text-slate-700 font-bold text-3xl uppercase'>welcome to the new pizza center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[23vw] border outline-none rounded-md ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar