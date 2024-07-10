import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import CategoryReducer from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'

const Store = configureStore({
    reducer:{
        cart: CardReducer,
        category: CategoryReducer,
        search: SearchReducer,
    }
})

export default Store

