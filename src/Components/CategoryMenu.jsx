import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategoryReducer.jsx'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListUniqueCategory = () => {
    const uniquecategory = [... new Set(FoodData.map((food) => food.category))]
    setcategories(uniquecategory)
  }

  useEffect(() => {
    ListUniqueCategory()
  }, [])

  const dispatch = useDispatch()


  return (
    <div className='mt-20'>
      <h1 className='uppercase font-semibold text-3xl'>order your favorite food</h1>
      <div className='flex items-center gap-5 overflow-x-scroll lg:overflow-x-hidden'>
        <button onClick={() => dispatch(addCategory("All"))} className='bg-slate-700 px-1.5 text-white font-semibold text-xl rounded-md  hover:bg-green-700 hover:text-black transition-all duration-500 mt-4 '>All</button>
        {
          categories.map((category, index) => (
            <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-slate-700 px-1.5 text-white font-semibold text-xl rounded-md  hover:bg-green-700 hover:text-black transition-all duration-500 mt-4 '>{category}</button>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryMenu