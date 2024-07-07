import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => { 
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lgitems-center lg:justify-between m-5'>
        <div>
            <h1 className='text-3xl font-bold text-slate-700'>{new Date().toUTCString().slice(0, 16)}</h1>
            <h1 className='text-3xl font-bold text-slate-700 uppercase'>welcome to pizza center</h1>
        </div>
        <div>
            <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[25vw] border outline-none rounded-md' type="search" name="search" placeholder='search here' id="" />
        </div>
    </div>
  )
}

export default Navbar