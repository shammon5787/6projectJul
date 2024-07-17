import { createSlice } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";

const CategorySlice = createSlice({
    name : 'category',
    initialState:{
        category: 'All',
    },
    reducers:{
        addCategory:(state, action)=>{
            state.category = action.payload
        }
    }

})
export const {addCategory} = CategorySlice.actions
export default CategorySlice.reducer
