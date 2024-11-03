import { configureStore } from "@reduxjs/toolkit";
import exerciseLogReducer from './features/exerciseLogSlice'

// initialize our redux store with configureStore
export const store = configureStore({
    reducer: {
        exerciseLog: exerciseLogReducer
    }
})