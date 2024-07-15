import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData.js'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice.jsx'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])

    const listUniqueCategory = () => {
        const uniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(uniqueCategory)
    }
    useEffect(() => {
        listUniqueCategory()
    }, [])

    const dispatch = useDispatch()

    return (
        <div className='mt-20'>
            <h1 className='text-slate-700 font-semibold text-3xl'>order your favorite food</h1>
            <div className='flex items-center gap-5 mt-3'>
            <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-700 px-1.5 font-semibold text-white rounded-md hover:bg-green-700 transition-all duration-500 text-xl'>All</button>
                {
                    categories.map((category, index) => (
                        <button onClick={()=>dispatch(addCategory(category))} key={index} className='bg-blue-700 px-1.5 font-semibold text-white rounded-md hover:bg-green-700 transition-all duration-500 text-xl'>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu