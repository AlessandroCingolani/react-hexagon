import { createSlice } from "@reduxjs/toolkit";


export const boardSlice = createSlice({
  name:'board',
  initialState:{
    value:[
      [1, 3, 4],
      [2, 4, 6, 7],
      [1, 3, 4, 6, 4],
      [2, 4, 6, 7],
      [2, 4, 6],
    ]
  },
  
})

export const boardReducer = boardSlice.reducer