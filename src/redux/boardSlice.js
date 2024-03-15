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
    ],
    sumNumber:0,
    startGame:false,
    userSelections: [],
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
      return {...state, value: updatedValue };
    },
    generateTotal:(state)=> {
      const updateNumber = Math.floor(Math.random() * 12) + 10
        return {...state ,sumNumber:updateNumber}  
    },
    startGame:(state)=> {
       return {...state ,startGame:true}  
    },
    addUserSelection: (state, action) => {
      state.userSelections = [...state.userSelections, action.payload];
      console.log(state.userSelections);
    }
  }
})
export const {generateRandom,generateTotal,startGame,addUserSelection } = boardSlice.actions
export const boardReducer = boardSlice.reducer