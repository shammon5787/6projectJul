import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../Store/CategorySlice'

const CategoryMenu = () => {

  const [categories, setcategories] = useState([])

  const ListUniqueCategories = ()=>{
    const uniqueCategories = [... new Set(FoodData.map((food)=>food.category))]
    setcategories(uniqueCategories)
  }

  useEffect(() => {
   ListUniqueCategories();
  }, [])
  
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state)=>state.category.category)

  return (
    <div className='m-6 pt-20'>
        <h1 className='text-slate-700 font-semibold text-3xl'>The fast food center gilgit-baltistan</h1>
        <div className='flex gap-4 pt-4'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 py-0 px-2 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white transition-all duration-500'>All</button>
           
           {
            categories.map((category , index)=>{
              return(
                <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-700 py-0 px-2 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white transition-all duration-500'>{category}</button>
              )
            })
           }

        </div>
    </div>
  )
}

export default CategoryMenu