import { createSlice } from "@reduxjs/toolkit";


export const boardSlice = createSlice({
  name:'board',
  initialState:{
    value:[
      [0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0],
    ]
  },
  reducers:{
    generateRandom: (state) => {
      const updatedValue = state.value.map((row) => {
        return row.map(() => {
          return Math.floor(Math.random() * 12) + 1; 
        });
      });
    
      return { ...state, value: updatedValue };
    }
  }
})
export const {generateRandom} = boardSlice.actions
export const boardReducer = boardSlice.reducer