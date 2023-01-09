import { useMemos } from "../components/feature/memo/Memo"
import { v4 as uuidv4 } from "uuid"
import {
    memo,
    useEffect,
} from "react"
import {
    add,
    one,
} from "../components/feature/memo/memoSlice"
import { 
    useDispatch,
} from "react-redux"

export default function customHook(): JSX.Element {
    const [memos, addMemo, delMemo] = useMemos()
    const dispatch = useDispatch()

    useEffect(() => {
        addMemo("test")
        console.log("%o", memos)
    }, [])

    useEffect(() => {
        console.log("%o", memos)
        console.log(`${memos.length}`)
        console.log(typeof memos)
    }, [memos])


    return (
        <>
            {memos.map(memo => (<div>{memo.text}</div>))}
            <button onClick={() => addMemo("Pushed1!")}>Push1!</button>
            <button onClick={() => addMemo("Pushed2!")}>Push2!</button>
        </>
    )
}