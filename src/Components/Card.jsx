import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { FaCartShopping } from "react-icons/fa6";


const Card = () => {

    const [activeCard, setactiveCard] = useState(true)
    const selectItem = useSelector((state)=>state.cart.cart)

    const totalItem = selectItem.reduce((totalItem, item)=>totalItem + item.qty, 0)
    const totalprice = selectItem.reduce((totalprice, item)=>totalprice + item.qty * item.price , 0)

    return (
       <>
        <div className={`bg-white fixed top-0 right-0 w-full h-full lg:w-[22vw] p-4 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-700 z-50`}>
            <div className='flex items-center justify-between'>
                <h1 className='text-slate-700 font-semibold text-2xl'>Your Orders</h1>
                <MdClose onClick={()=>setactiveCard(!activeCard)} className='text-slate-700 font-semibold text-2xl cursor-pointer bg-green-300 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
            </div>

            {
                selectItem.map((food)=>(
                    <CardItem key={food.id} id = {food.id} name ={food.name} image = {food.image} price = {food.price} qty = {food.qty} />
                ))
            }

            <div className='absolute bottom-2'>
                <h1 className='text-slate-700 font-bold'>Total Items: {totalItem} </h1>
                <h1 className='text-slate-700 font-bold'>Total Price: {totalprice} </h1>
                <hr />
                <button className='bg-blue-700 mt-3 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black w-[90vw] lg:w-[20vw]'>Check Out</button>
            </div>
        </div>
        <FaCartShopping onClick={()=>setactiveCard(!activeCard)} className={`text-3xl fixed bottom-7 right-7 cursor-pointer ${selectItem.length > 0 ? "animate-bounce" :  "animate-none"} `} />
       </>
    )
}

export default Card