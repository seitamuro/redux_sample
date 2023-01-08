import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    decrement,
    increment,
    incrementByAmount,
    selectCount,
} from "./counterSlice"

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(2)

    return (
        <div>
            <div>
                <button
                    onClick={() => dispatch(increment())}
                >+</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}