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
        <div className='mt-20 '>
            <h1 className='text-slate-700 font-semibold text-4xl uppercase'>order your favorite food</h1>
            <div className='mt-5 flex gap-6 overflow-x-scroll lg:overflow-x-hidden'>
                <button onClick={() => dispatch(addCategory("All"))} className='bg-blue-700 px-1 rounded-md font-semibold text-xl text-white hover:bg-green-700 hover:text-black transition-all duration-500'>All</button>
                {
                    categories.map((category, index) => (
                        <button onClick={() => dispatch(addCategory(category))} key={index} className='bg-blue-700 px-1 rounded-md font-semibold text-xl text-white hover:bg-green-700 hover:text-black transition-all duration-500'>{category}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryMenu