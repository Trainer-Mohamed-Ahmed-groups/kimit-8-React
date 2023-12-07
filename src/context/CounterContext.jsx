import { createContext, useState } from "react";

export const CounterContext = createContext()

// eslint-disable-next-line react/prop-types
const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)

    let handleIncrease = () => {
        setCounter(counter + 1)
    }

    let handleDecrease = () => {
        setCounter(counter - 1)
    }
    return (
        <CounterContext.Provider value={{counter, handleIncrease, handleDecrease}}>{children}</CounterContext.Provider>
    );
}

export default CounterProvider;