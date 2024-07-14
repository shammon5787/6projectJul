import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])
    const listUniqueCategory = ()=>{
        const uniqueCategory = [... new Set(FoodData.map((food)=>food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
      listUniqueCategory()
    }, [])

    const dispatch = useDispatch()
    
  return (
    <div className='mt-16'>
        <h1 className='uppercase text-slate-700 font-semibold text-3xl'>order your favorite fast food</h1>
        <div className='flex gap-4 my-5'>
        <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 rounded-md px-1 font-semibold text-white text-xl hover:bg-green-700 hover:text-black transition-all duration-500'> All </button>
            {
                categories.map((category, index)=>(
                    <button onClick={()=>dispatch(addCategory(category))} className='bg-blue-700 rounded-md px-1 font-semibold text-white text-xl hover:bg-green-700 hover:text-black transition-all duration-500' key={index}> {category} </button>
                ))
            }
        </div>
    </div>
  )
}

export default CategoryMenu