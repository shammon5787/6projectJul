import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import CategoryMenu from '../Components/CategoryMenu.jsx'
import FoodItem from '../Components/FoodItem.jsx'
import Card from '../Components/Card.jsx'

const Home = () => {
    return (
        <div className='p-6'>
            <Navbar />
            <CategoryMenu />
            <FoodItem />
            <Card />
        </div>
    )
}

export default Home