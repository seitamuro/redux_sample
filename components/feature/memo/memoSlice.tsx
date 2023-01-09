import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"
import type { RootState } from "../../app/store"

export interface Memo {
    text: string
    id: string
}

export interface MemoState {
    memos: Memo[]
}

const initialState: MemoState = {
    memos: []
}

export const memoSlice = createSlice({
    name: "memo",
    initialState,
    reducers: {
        one: (state) => {
            let memo: Memo = {
                id: uuidv4(),
                text: "one",
            }
            state.memos.push(memo)
        },
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

export const { one, add, del } = memoSlice.actions
export const selectMemos = (state: RootState) => state.memos.memos
export const selectMemo = (state: RootState) => {(id: string) => state.memos.memos.filter(memo => memo.id == id)[0]}

export default memoSlice.reducer