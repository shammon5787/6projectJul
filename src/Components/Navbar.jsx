import React from 'react'
import { useDispatch } from 'react-redux'
import { AddSearch } from '../Store/SearchSlice'

const Navbar = () => {
const dispatch = useDispatch()

  return (
    <div className='m-6 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-col'>
            <h1 className='text-slate-700 text-3xl font-bold'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='text-slate-700 text-3xl font-bold uppercase'>welcome to new fastfood center</h1>
        </div>
        <input onChange={(e)=>dispatch(AddSearch(e.target.value))} className='p-2 w-full lg:w-[23vw] rounded-md border outline-none ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar