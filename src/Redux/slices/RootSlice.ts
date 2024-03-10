import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "make",
        model: "model",
        year: "year",
        mileage: "mileage",
        when_purchased: "when_purchased",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        choosemileage: (state, action) => { state.mileage = action.payload},
        choosewhen_purchased: (state, action) => { state.when_purchased = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseYear, choosemileage, choosewhen_purchased} = rootSlice.actions