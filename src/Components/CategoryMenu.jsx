import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListUniqueCategory = ()=>{
    const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
    setcategories(uniqueCategory)
  }

  useEffect(() => {
    ListUniqueCategory();
  }, [])

  const dispatch = useDispatch()
  


  return (
    <div className='mt-16'>
        <h1 className='uppercase text-slate-700 font-semibold text-3xl'>order your favorite food</h1>
        <div className='flex gap-4 mt-3 overflow-x-scroll lg:overflow-x-hidden'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 py-0 px-1 rounded-md text-white font-semibold hover:bg-green-700 hover:text-black transition-all duration-500 text-xl'>All</button>
            
            {
              categories.map((category ,index)=>(
                <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-700 py-0 px-1 rounded-md text-white font-semibold hover:bg-green-700 hover:text-black transition-all duration-500 text-xl'>{category}</button>
              ))
            }

        </div>
    </div>
  )
}

export default CategoryMenu