import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { BsFillCartFill } from "react-icons/bs";

const Card = () => {

    const [activeCard, setactiveCard] = useState(true)
    const selectItem = useSelector((state) => state.cart.cart)

    const totalItems = selectItem.reduce((totalItems , item)=>totalItems + item.qty, 0)
    const totalPrice = selectItem.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)

    return (
        <>
            <div className={`fixed bg-white top-0 right-0 h-full w-full lg:w-[22vw] p-4 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-slate-700 text-2xl font-semibold'>Your Orders</h1>
                    <MdClose onClick={() => setactiveCard(!activeCard)} className='text-slate-700 font-bold text-2xl cursor-pointer bg-green-300 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
                </div>
                {
                    selectItem.map((food) => (
                        <CardItem key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} desc={food.desc} qty={food.qty} />
                    ))
                }

                <div className='absolute bottom-2'>
                    <h1 className='text-slate-700 font-semibold'>Total Items : {totalItems} </h1>
                    <h1 className='text-slate-700 font-semibold'>Total Price : {totalPrice} </h1>
                    <hr />
                    <button className='bg-blue-700 px-2 py-0 rounded-md text-white mt-2 font-semibold hover:bg-green-600 hover:text-black transition-all duration-500 w-[90vw] lg:w-[20vw] '>Check Out</button>
                </div>
            </div>
            <BsFillCartFill onClick={()=>setactiveCard(!activeCard)} className={`fixed bottom-10 right-10 text-3xl cursor-pointer bg-white rounded-full shadow-md p-1 ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card