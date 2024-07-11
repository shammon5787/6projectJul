import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name : 'search' ,
    initialState:{
        search: "",
    },
    reducers:{
        AddSearch:(state, action)=>{
            state.search = action.payload
        }
    }
})

export const {AddSearch} = SearchSlice.actions
export default SearchSlice.reducer