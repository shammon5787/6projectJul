import React from 'react'
import Navbar from '../Components/Navbar'
import CategoryMenu from '../Components/CategoryMenu'
import FoodItem from '../Components/FoodItem'
import Card from '../Components/Card'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <FoodItem />
        <Card />
    </div>
  )
}

export default Home