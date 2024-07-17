import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import { useSelector } from 'react-redux'

const FoodItem = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state)=>state.search.search)
  return (
    <div className='grid lg:grid-cols-4'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => (
          <FoodCard key={food.id} id={food.id} name={food.name} price={food.price} image={food.image} rating={food.ratting} desc={food.desc} />
        ))
      }

    </div>
  )
}

export default FoodItem