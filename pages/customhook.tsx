import { useMemos } from "../components/feature/memo/Memo"
import { v4 as uuidv4 } from "uuid"
import {
    useEffect,
} from "react"

export default function Customhook(): JSX.Element {
    const [memos, addMemo, delMemo] = useMemos()

    return (
        <>
            {memos.map((memo, i) => (<div key={i}>{memo.text}</div>))}
            <button onClick={() => addMemo("Pushed1!")}>Push1!</button>
            <button onClick={() => addMemo("Pushed2!")}>Push2!</button>
        </>
    )
}