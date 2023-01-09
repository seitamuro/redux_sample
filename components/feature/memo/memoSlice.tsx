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
        del: (state, action: PayloadAction<string>) => {
            state.memos = state.memos.filter(memo => !(memo.id == action.payload))
        },
    }
})

export const { add, del } = memoSlice.actions
export const selectMemos = (state: MemoState) => state.memos
export const selectMemo = (state: MemoState) => {(id: string) => state.memos.filter(memo => memo.id == id)[0]}

export default memoSlice.reducer