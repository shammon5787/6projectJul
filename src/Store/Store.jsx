import { configureStore } from "@reduxjs/toolkit";
import CardSlice from './CardSlice.jsx'
import CardReducer from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'

const Store = configureStore({
    reducer:{
        cart : CardSlice ,
        category: CardReducer ,
        search: SearchReducer ,
    }
})
export default Store