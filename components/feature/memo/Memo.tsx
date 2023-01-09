import {
    selectMemos,
    selectMemo,
    add,
    del,
 } from "./memoSlice"
import { useDispatch, useSelector } from "react-redux"
import type { Memo } from "./memoSlice" 

export function useMemos() {
    const memos: Memo[] = useSelector(selectMemos)
    const dispatch = useDispatch()

    const addMemo = (text: string): Object => dispatch(add(text));
    const delMemo = (id: string): Object => dispatch(del(id))

    return [memos, addMemo, delMemo] as const
}