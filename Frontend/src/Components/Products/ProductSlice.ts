import { createSlice } from "@reduxjs/toolkit";
import { IProduct, productApi } from "./ProductApi";
const initialState = {
   productsList: null,
   error: '',
   loading: false 
} as { productsList: null | IProduct[]; error: string; loading: boolean}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
       builder.addMatcher(productApi.endpoints.getProducts.matchPending, (state) => {
        console.log('loading :',state)
          state.loading = true
       }) 
       .addMatcher(productApi.endpoints.getProducts.matchFulfilled, (state, action) => {
          state.productsList = [...action.payload]
       })
       .addMatcher(productApi.endpoints.getProducts.matchRejected, (state, action) => {
          state.loading = false;
          state.error = 'error in loading'
       })
    }
})

export default productSlice.reducer