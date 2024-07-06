import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'

const FoodItem = () => {

    // const [foodcard, setfoodcard] = useState(second)

  return (
    <div className='m-6 flex gap-4 flex-wrap'>
        {
            FoodData.map((food)=>(
                <FoodCard key={food.id} id = {food.id} name = {food.name} image = {food.image} desc = {food.desc} rating = {food.ratting} price = {food.price} />
            ))
        }
    </div>
  )
}

export default FoodItem