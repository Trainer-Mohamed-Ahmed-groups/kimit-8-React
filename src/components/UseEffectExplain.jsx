import { useEffect, useState } from "react"

export default function UseEffectExplain() {
    const [username, setUserName] = useState("")

    useEffect(() => {
        console.log("Rendered")
    }, [])

    useEffect(() => {
        if (username === "") return;
        console.log("Edited")
    }, [username])

    useEffect(()=>{
        return ()=>
        {
            console.log("Died")
        }
    },[])
    return (
        <div className="text-center m-4">
            <h2>UseEffectExplain</h2>
            <input type="text" onChange={(ev) => setUserName(ev.target.value)} />
            <div>{username}</div>
        </div>
    )
}
