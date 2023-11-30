import { useState } from "react"
import { Button, Form } from "react-bootstrap"
export default function HandlingEvents() {

    let [username, setUsername] = useState("")

    let handleClick = () => {
        console.log("Clicked")
    }
    let handleUsername = (ev) => {
        setUsername(ev.target.value)
        console.log(username)
    }
    return (
        <div>
            <h2>HandlingEvents</h2>
            <Button variant="primary" onClick={handleClick}>Click me</Button>
            <Form.Control type="text" onChange={handleUsername} value={username} />
            {username}
        </div>
    )
}
