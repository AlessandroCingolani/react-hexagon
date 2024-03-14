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
      // map row
      const updatedValue = state.value.map((row) => {
        // map cell with random number
        return row.map(() => {
          return Math.floor(Math.random() * 12) + 1; 
        });
      });
      // return value updated
      return { value: updatedValue };
    }
  }
})
export const {generateRandom} = boardSlice.actions
export const boardReducer = boardSlice.reducer