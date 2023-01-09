import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice"
import memoSlice from "../feature/memo/memoSlice";
import memorecuder from "../feature/memo/memoSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        memos: memoSlice
    }
})