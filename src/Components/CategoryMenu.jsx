
import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='m-6 pt-16'>
        <h1 className='text-slate-700 text-3xl font-semibold uppercase'>order your favorite fastfood</h1>
        <div className='flex items-center gap-4 overflow-x-scroll lg:overflow-x-hidden pt-3'>
            <button className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>All</button>
            <button className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>Lunch</button>
            <button className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>Dinner</button>
            <button className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>BreakFast</button>
        </div>
    </div>
  )
}

export default CategoryMenu