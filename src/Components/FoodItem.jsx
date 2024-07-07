import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData.js'
import { useSelector } from 'react-redux'

const FoodItem = () => {

  const category = useSelector((state) => state.category.category)

  // const [foodcard, setfoodcard] = useState(FoodData)
  const search = useSelector((state)=>state.search.search)

  return (
    <div className='m-5 flex flex-wrap gap-4'>
      {
        FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase())
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map((food)=> (
          <FoodCard key={food.id} id={food.id} name={food.name} image={food.image} rating={food.ratting} desc={food.desc} price={food.price} />
        ))
      }

    </div>
  )
}

export default FoodItem