import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {
  return (
    <div className='grid lg:grid-cols-4 m-6 gap-3'>
        {
            FoodData.map((food)=>(        
                <FoodCard key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} rating = {food.ratting} desc = {food.desc} />
            ))
        }
    </div>
  )
}

export default FoodItem