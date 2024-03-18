import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name:'Points',
  initialState:{
    value:0,
    stage:1
  },
  reducers:{
    increment: (state) => {
      state.value += 1 
    },
    decrement: (state) => {
      state.value -= 1
    },
    resetCounter:(state) => {
      state.value = 0,
      state.stage = 1
    },
    incrementStageLevel:(state) => {
      state.stage += 1
    }
  }
})

export const {increment,decrement,resetCounter,incrementStageLevel} = counterSlice.actions

export const counterReducer = counterSlice.reducer