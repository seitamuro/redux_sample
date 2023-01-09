import {
    selectMemos,
    selectMemo,
    add,
    del,
 } from "./memoSlice"
import { useDispatch, useSelector } from "react-redux"

export function useMemos() {
    const memos = useSelector(selectMemos)
    const getMemo = useSelector(selectMemo)
    const dispatch = useDispatch()

    const addMemo = (text: string) => dispatch(add(text));
    const delMemo = (id: string) => dispatch(del(id))

    return [memos, getMemo, addMemo, delMemo]
}