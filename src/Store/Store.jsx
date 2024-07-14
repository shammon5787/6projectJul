import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import CategorySlice from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'

const Store = configureStore({
    reducer:{
        cart: CardReducer ,
        category: CategorySlice ,
        search: SearchReducer,
    }
})

export default Store