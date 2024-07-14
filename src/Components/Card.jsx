import React, { useState } from 'react'
import { MdOutlineClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from "react-icons/md";

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
    const selectitem = useSelector((state) => state.cart.cart)
    const totalitem = selectitem.reduce((totalitem, item) => totalitem + item.qty, 0)
    const totalprice = selectitem.reduce((totalprice, item) => totalprice + item.qty * item.price, 0)
    return (
        <>
            <div className={`bg-white fixed top-0 right-0 w-full lg:w-[24vw] h-full z-50 p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-slate-700 font-semibold text-2xl'>Your Orders</h1>
                    <MdOutlineClose onClick={() => setactiveCard(!activeCard)} className='text-slate-700 font-semibold text-2xl cursor-pointer bg-green-300 rounded-full hover:text-white hover:bg-blue-700 transition-all duration-500 ' />
                </div>

                {
                    selectitem.map((food) => (
                        <CardItem key={food.id} id={food.id} name={food.name} price={food.price} image={food.image} qty={food.qty} />
                    ))
                }

                <div className='absolute bottom-2'>
                    <h1 className='text-slate-700 font-semibold text-xl'>Total Items: {totalitem} </h1>
                    <h1 className='text-slate-700 font-semibold text-xl'>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-700 rounded-md px-1 font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500 mt-2 w-[90vw] lg:w-[22vw] '> Check Out </button>
                </div>
            </div>
            <MdShoppingCart onClick={()=>setactiveCard(!activeCard)} className={`text-5xl cursor-pointer fixed bottom-10 right-6 bg-slate-600 rounded-full ${selectitem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card