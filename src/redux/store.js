import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { boardReducer } from "./boardSlice";

export default configureStore({
  reducer:{
    counter:counterReducer,
    board:boardReducer
  }
})