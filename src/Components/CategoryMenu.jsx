import React, {  useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListuniqueCategories = () => {
    const uniqueCategories = [... new Set(FoodData.map((food)=> food.category))]
    setcategories(uniqueCategories)
  }

  useEffect(() => {
    ListuniqueCategories()
  }, [])

  const dispatch = useDispatch()

  
  return (
    <div className='m-6 pt-14'>
      <h1 className='uppercase text-slate-700 font-semibold text-3xl'>order your favorite food</h1>
      <div className='flex gap-5 overflow-x-scroll lg:overflow-x-hidden mt-3'>
      <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 px-1 rounded-md font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500 text-2xl'>All</button>
        {
          categories.map((category, index) => (
            <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-700 px-1 rounded-md font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500 text-2xl'>{category}</button>
          ))
        }

      </div>
    </div>
  )
}

export default CategoryMenu