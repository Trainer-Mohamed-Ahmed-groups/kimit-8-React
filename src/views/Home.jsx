import { useContext, useMemo, useState } from "react"
import { CounterContext } from "../context/CounterContext"

export default function Home() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState("")

    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    var fullName = useMemo(
        () => <h2 style={{ color: randomColor }}>Full name is : {firstName + lastName}</h2>
        , [firstName, lastName])

    const counter = useContext(CounterContext)
    return (
        <div>
            Home : {counter.counter}
            <input type="text" onChange={(ev) => setFirstName(ev.target.value)} />
            <input type="text" onChange={(ev) => setLastName(ev.target.value)} />
            <input type="number" onChange={(ev) => setAge(ev.target.value)} />

            <h4>First name is : {firstName}</h4>
            <h4>Last name is : {lastName}</h4>
            {fullName}
            <h4>Age name is : {age}</h4>
        </div>
    )
}
