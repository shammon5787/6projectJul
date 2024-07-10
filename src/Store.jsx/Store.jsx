import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'

const Store = configureStore({
    reducer:{
        cart: CardReducer,
    }
})

export default Store

