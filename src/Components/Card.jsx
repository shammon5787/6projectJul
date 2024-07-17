import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi2";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {

    const [activeCars, setactiveCars] = useState([])
    const selectedItem = useSelector((state)=>state.cart.cart)
    const totalitems = selectedItem.reduce((totalitems ,item )=>totalitems + item.qty, 0)
    const totalprice = selectedItem.reduce((totalprice ,item)=>totalprice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-slate-100 fixed top-0 right-0 w-full h-full lg:w-[25vw] p-3 ${activeCars ? "translate-x-0" : "translate-x-full"} z-50 transition-all duration-500 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='text-slate-800 font-semibold text-2xl'>Your Orders</h1>
                    <IoCloseSharp onClick={() => setactiveCars(!activeCars)} className='text-slate-800 font-semibold text-2xl cursor-pointer bg-slate-400 rounded-full hover:bg-slate-50 hover:text-green-800 transition-all duration-500' />
                </div>

                {
                selectedItem.map((food)=>(
                    <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} qty = {food.qty} />
                ))
                }
                <div className='absolute bottom-4'>
                    <h1 className='text-slate-800 font-semibold text-xl'>Total Items: {totalitems} </h1>
                    <h1 className='text-slate-800 font-semibold text-xl'>Total Price: {totalprice} </h1>
                    <hr />
                    <button className='bg-blue-700 px-1 rounded-md font-semibold mt-2 text-white hover:bg-green-700 hover:text-black transition-all duration-500 w-[90vw] lg:w-[23vw] '>Check Out</button>
                </div>
            </div>
            <HiShoppingCart onClick={() => setactiveCars(!activeCars)} className={`text-6xl fixed bottom-8 right-5 cursor-pointer ${selectedItem.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card