import { createSlice } from "@reduxjs/toolkit";

// default initial state app
const initialState = {
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
  clickedData:[],
  gamePhase:"",
  endGame:false
};

export const boardSlice = createSlice({
  name:'board',
  initialState:initialState,
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
    generateTotal:(state,action)=> {
      if(action.payload === 'RESET'){
        return {...state,sumNumber:0}
      }
      const updateNumber = Math.floor(Math.random() * 12) + 10
        return {...state ,sumNumber:updateNumber}  
    },
    // flag to see started game at click btn
    startGame:(state)=> {
       return {...state ,startGame:true}  
    },
    // end game
    endGame:(state)=> {
       return {...state ,endGame:true}  
    },

    // flag nextLevel
    gamePhase:(state,action)=> {
      console.log(action.payload);
      return {...state, gamePhase: action.payload};
    },
    // save user selections when are different 
    addUserSelection: (state, action) => {
      if(action.payload === "DELETE"){
        return {...state, userSelections : []};
      }else {
        state.userSelections = [...state.userSelections, action.payload];
      }
     
    },
    // phase selection
    selectionPhase: (state, newValue) => {
      console.log(newValue.payload);
      return {...state, selectionPhase: newValue.payload};
    },
    selectedCell: (state, newValue) => {
      if(newValue.payload === 'DELETE') {
        // console.log('SVUOTO ARRAY'+ state.clickedData);
        return { ...state, clickedData: [] }
      }
      const newClickedData = state.clickedData.concat(newValue.payload);
      return { ...state, clickedData: newClickedData };
    },
    resetBoard: () => {
      // Reset game
      return initialState;
    }
  }
})
export const {generateRandom,generateTotal,startGame,addUserSelection, selectionPhase,selectedCell,resetBoard,gamePhase,endGame} = boardSlice.actions
export const boardReducer = boardSlice.reducer