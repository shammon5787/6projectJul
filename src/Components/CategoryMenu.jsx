import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='m-6 pt-11'>
        <h1 className='uppercase text-3xl font-semibold text-slate-700'>welcome to the fast food main branch</h1>
        <div className='flex gap-4 overflow-x-scroll lg:overflow-hidden mt-4'>
            <button className='bg-blue-700 py-0 px-2 text-white font-semibold text-2xl rounded-md hover:bg-green-700  transition-all duration-500'>All</button>
            <button className='bg-blue-700 py-0 px-2 text-white font-semibold text-2xl rounded-md hover:bg-green-700  transition-all duration-500'>Dinner</button>
            <button className='bg-blue-700 py-0 px-2 text-white font-semibold text-2xl rounded-md hover:bg-green-700  transition-all duration-500'>BreakFast</button>
            <button className='bg-blue-700 py-0 px-2 text-white font-semibold text-2xl rounded-md hover:bg-green-700  transition-all duration-500'>Lunch</button>
        </div>
    </div>
  )
}

export default CategoryMenu