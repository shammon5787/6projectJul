
import React, { useEffect, useState } from 'react'
// import { ImOpera } from 'react-icons/im'
import FoodData from '../Data/FoodData.js'
import { addCategory } from '../Store.jsx/CategorySlice.jsx'
import { useDispatch } from 'react-redux'

const CategoryMenu = () => {


  const [categories, setcategories] = useState([])

  const ListUniqueCategories = () => {
    const UniqueCategoris = [... new Set(FoodData.map((food) => food.category))]
    setcategories(UniqueCategoris)
  }

  useEffect(() => {
    ListUniqueCategories()
  }, [])


  const dispatch = useDispatch()


  return (
    <div className='m-6 pt-16'>
      <h1 className='text-slate-700 text-3xl font-semibold uppercase'>order your favorite fastfood</h1>
      <div className='flex items-center gap-4 overflow-x-scroll lg:overflow-x-hidden pt-3'>
        <button onClick={() => dispatch(addCategory("All"))} className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>All</button>

        {
          categories.map((category, index) => {
            return (
              <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-blue-700 px-1.5 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>{category}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryMenu