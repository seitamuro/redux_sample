import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

interface Memo {
    text: string
    id: string
}

interface MemoState {
    memos: Memo[]
}

const initialState: MemoState = {
    memos: []
}

export const memoSlice = createSlice({
    name: "memo",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            let memo: Memo = {
                id: uuidv4(),
                text: action.payload
            }
            state.memos.push(memo)
        },
        delete: (state, action: PayloadAction<string>) => {
            state.memos = state.memos.filter(memo => !(memo.id == action.payload))
        }
    }
})

export default memoSlice.reducer