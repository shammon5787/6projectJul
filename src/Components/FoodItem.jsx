import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import { useSelector } from 'react-redux'

const FoodItem = () => {

  const category = useSelector((state) => state.category.category)
  const search =  useSelector((state)=>state.search.search)

  return (
    <div className='grid lg:grid-cols-4 gap-5'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase())
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map((food) => (
          <FoodCard key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} desc={food.desc} rating={food.ratting} />
        ))
      }
    </div>
  )
}

export default FoodItem