import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-between '>
        <div>
            <h1 className=' font-bold text-3xl'> {new Date().toUTCString().slice(0, 16)} </h1>
            <h1 className='font-bold text-3xl uppercase'> welcome to new fast food center </h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full rounded-lg border outline-none lg:w-[25vw] text-black ' type="search" name="search" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar