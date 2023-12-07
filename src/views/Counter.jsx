import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

export default function Counter() {
    const counter = useContext(CounterContext)
    return (
        <div className="text-center">
            <h2>Counter</h2>
            <h3>{counter.counter}</h3>
            <button onClick={counter.handleIncrease}>Increment</button>
            <button onClick={counter.handleDecrease}>Decrement</button>
            
        </div>
    )
}
