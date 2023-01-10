import { useMemos } from "../components/feature/memo/Memo"
import { v4 as uuidv4 } from "uuid"
import {
    useEffect,
} from "react"

export default function Customhook(): JSX.Element {
    const [memos1, addMemo1, delMemo1] = useMemos()
    const [memos2, addMemo2, delMemo2] = useMemos()

    return (
        <>
            <div>
                <b>1つめのカスタムホックの内容</b>
                {memos1.map((memo) => (<div key={memo.id}>{memo.text}</div>))}
                <button onClick={() => addMemo1("CustomHook1")}>CustomHook1</button>
            </div>
            <div>
                <b>2つめのカスタムホックの内容</b>
                {memos1.map((memo) => (<div key={memo.id}>{memo.text}</div>))}
                <button onClick={() => addMemo2("CustomHook2")}>CustomHook2</button>
            </div>
        </>
    )
}