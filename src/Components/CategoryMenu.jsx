import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListUniqueCategories = () => {
    const uniqueCategories = [... new Set(FoodData.map((food) => food.category))]
    setcategories(uniqueCategories)
  }

  useEffect(() => {
    ListUniqueCategories();
  }, [])

  const dispatch = useDispatch()


  return (
    <div className='m-6 pt-12'>
      <h1 className='uppercase text-slate-700 font-semibold text-2xl'>hi! order your favorite fastfood</h1>
      <div className='flex gap-4 items-center overflow-x-scroll md:overflow-x-hidden pt-4'>
      <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 px-2 py-0 rounded-md text-white font-semibold hover:bg-green-600 hover:text-black transition-all duration-500 '>All</button>
        {
          categories.map((category, index) => (
            <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-700 px-2 py-0 rounded-md text-white font-semibold hover:bg-green-600 hover:text-black transition-all duration-500 '>{category}</button>
          ))
        }

      </div>
    </div>
  )
}

export default CategoryMenu