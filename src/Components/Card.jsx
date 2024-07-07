import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { BsCartFill } from "react-icons/bs";

const Card = () => {

  const selectItem = useSelector((state) => state.cart.cart)

  const [activeCart, setactiveCart] = useState(true)

  const totalItems = selectItem.reduce((totalItems , item)=>totalItems + item.qty, 0)
  const totalPrice = selectItem.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)

  return (
    <>
      <div className={`bg-white fixed top-0 right-0 w-full h-full lg:w-[25vw] p-2 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-2xl text-slate-700'>Your Orders</h1>
          <MdClose onClick={() => setactiveCart(!activeCart)} className='cursor-pointer bg-green-700 rounded-full hover:bg-pink-500 text-white hover:text-slate-950 font-semibold' />
        </div>

        {
          selectItem.length > 0 ? selectItem.map((food) => (
            <CardItem key={food.id} id={food.id} name={food.name} image={food.image} price={food.price} desc={food.desc} qty={food.qty} />
          )) :
          <h1>No Item Selected</h1>
        }


        <div className='absolute bottom-0'>
          <h1 className='text-slate-700 font-semibold text-xl'>Total Items: {totalItems} </h1>
          <h1 className='text-slate-700 font-semibold text-xl'>Total Price: {totalPrice} </h1>
          <button className='bg-blue-700 py-0 px-2 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white transition-all duration-500 mb-3 w-[90vw] lg:w-[23vw]'>Dinner</button>
        </div>
      </div>

      <BsCartFill onClick={()=>setactiveCart(!activeCart)} className={`text-3xl fixed bottom-7 right-6 bg-slate-600 rounded-full cursor-pointer ${selectItem.length > 0 ? "animate-bounce" : "animate-none"}`}/>
    </>
  )
}

export default Card