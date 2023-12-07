import { useCallback, useState } from "react"
import IncreaseBtn from "../components/IncreaseBtn"

export default function CallBackExplain() {
    const [myNumber, setMyNumber] = useState(0)

    let handleIncrease = () => setMyNumber(n => n + 1)


    let customIncrease = useCallback(handleIncrease, [])
    return (
        <div className="text-center">
            <h2>CallBackExplain</h2>
            <h3>{myNumber}</h3>
            <IncreaseBtn clickEv={customIncrease} />
        </div>
    )
}
