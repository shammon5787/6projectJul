import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem.jsx';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";

const Card = () => {
    const selectItem = useSelector((state) => state.cart.cart)

    const [activeCard, setactiveCard] = useState(true)
    const totalitem = selectItem.reduce((totalitem, item)=>totalitem + item.qty ,0)
    const totalprice = selectItem.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-white fixed top-0 right-0 w-full h-full lg:w-[25vw] z-50 p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-slate-700 font-semibold text-2xl'>Your Orders</h1>
                    <MdClose onClick={()=>setactiveCard(!activeCard)} className='text-slate-700 font-semibold text-2xl cursor-pointer bg-green-300 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
                </div>
                {
                    selectItem.map((food) => (
                        <CardItem key={food.id} id={food.id} name={food.name} price={food.price} image={food.image} qty={food.qty} desc={food.desc} rating={food.rating} />
                    ))
                }
                <div className='absolute bottom-5'>
                    <h1 className='text-slate-700 font-semibold text-xl'>Total Items: {totalitem} </h1>
                    <h1 className='text-slate-700 font-semibold text-xl'>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-700 px-1.5 font-semibold text-white rounded-md hover:bg-green-700 transition-all duration-500 mt-2 w-[90vw] lg:w-[23vw] '>Add To Card</button>
                </div>
            </div>
            <MdShoppingCart onClick={()=>setactiveCard(!activeCard)} className={`text-6xl fixed bottom-6 right-10 ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} cursor-pointer `} />
        </>
    )
}

export default Card