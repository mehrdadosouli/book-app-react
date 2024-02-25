import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:[]
}
const favoriteSlice=createSlice({
    name:'favoriteSlice',
    initialState,
    reducers:{
        addFavorite:(state,action)=>{
            state.data=action.payload
        }
    }
})

export default favoriteSlice.reducer;
export const {addFavorite}=favoriteSlice.actions
export const selectors = (state) => {
    return state.favorite.data;
  }