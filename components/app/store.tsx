import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice"
import memoSlice from "../feature/memo/memoSlice";
import memorecuder from "../feature/memo/memoSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        memos: memoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch