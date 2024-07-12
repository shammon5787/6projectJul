import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { BsCartFill } from "react-icons/bs";

const Card = () => {

    const selectItem = useSelector((state) => state.cart.cart)

    const [activeCard, setactiveCard] = useState(true)

    const totalItems = selectItem.reduce((totalitem, item)=>totalitem + item.qty , 0)
    const totalPrice = selectItem.reduce((totalprice, item)=>totalprice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-white fixed top-0 right-0 w-full lg:w-[25vw] h-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-slate-700 font-semibold text-xl'>Your Orders</h1>
                    <MdClose onClick={() => setactiveCard(!activeCard)} className='text-slate-700 font-semibold text-xl bg-green-300 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500' />
                </div>

                {
                    selectItem.map((food) => (
                        <CardItem key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} qty={food.qty} />
                    ))
                }
                <div className='absolute bottom-3 '>
                    <h1 className='text-slate-700 font-semibold'>Total Items: {totalItems} </h1>
                    <h1 className='text-slate-700 font-semibold'>Total Price: {totalPrice} </h1>
                    <hr />
                    <button className='bg-blue-700 py-0 px-1 rounded-md text-white font-semibold hover:bg-green-700 hover:text-black transition-all duration-500 mt-3 w-[90vw] lg:w-[22vw] '>Check Out</button>
                </div>
            </div>
            <BsCartFill onClick={()=>setactiveCard(!activeCard)} className={`text-3xl fixed bottom-10 right-10 cursor-pointer ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card