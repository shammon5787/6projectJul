import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchCategory'

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <div className='m-6 flex flex-col lg:flex-row justify-between items-center'>
        <div className=''>
            <h1 className='text-slate-700 font-bold text-2xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='text-slate-700 font-bold text-2xl uppercase'>welcome to our pizza</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-[25vw] border outline-none rounded-md ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar