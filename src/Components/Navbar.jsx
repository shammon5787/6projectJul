import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
            <div>
                <h1 className='text-slate-700 font-bold text-4xl'> {new Date().toUTCString().slice(0, 16)} </h1>
                <h1 className='text-slate-700 font-bold text-4xl uppercase'> welcome to new fast food center </h1>
            </div>
            <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='p-2 w-full lg:w-[25vw] rounded-md border outline-none ' type="search" placeholder='search here' name="search" id="" />
        </div>
    )
}

export default Navbar