import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   filter : []
}


const storageSlice = createSlice({
    name : 'storage',
    initialState,
    reducers : {
        setFilter(state , action){
            state.filter = action.payload
        }
    }
})

export const {
    setFilter
} = storageSlice.actions

export default storageSlice.reducer