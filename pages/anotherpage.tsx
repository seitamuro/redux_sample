import { selectCount } from "../components/feature/counter/counterSlice"
import { useSelector } from "react-redux"

export default function AnotherPage() {
    const counter = useSelector(selectCount)
    return (
        <div>
            {counter}
        </div>
    )
}