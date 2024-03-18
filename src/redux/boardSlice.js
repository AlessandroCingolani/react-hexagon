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
    selectionPhase:null,
    clickedData:[]
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
    // number to reach with 3 selection
    generateTotal:(state)=> {
      const updateNumber = Math.floor(Math.random() * 12) + 10
        return {...state ,sumNumber:updateNumber}  
    },
    // flag to see started game at click btn
    startGame:(state)=> {
       return {...state ,startGame:true}  
    },
    // save user selections when are different 
    addUserSelection: (state, action) => {
      state.userSelections = [...state.userSelections, action.payload];
      console.log(state.userSelections);
    },
    selectionPhase: (state, newValue) => {
      console.log(newValue.payload);
      return {...state, selectionPhase: newValue.payload};
    },
    selectedCell: (state, newValue) => {
      if(newValue.payload === 'DELETE') {
        console.log('SVUOTO ARRAY'+ state.clickedData);
        return { ...state, clickedData: [] }
      }
      const newClickedData = state.clickedData.concat(newValue.payload);
      return { ...state, clickedData: newClickedData };
    }
  }
})
export const {generateRandom,generateTotal,startGame,addUserSelection, selectionPhase,selectedCell} = boardSlice.actions
export const boardReducer = boardSlice.reducer