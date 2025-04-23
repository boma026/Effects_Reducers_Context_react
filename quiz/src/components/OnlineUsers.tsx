import { CountContext } from "@/context/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const count = useContext(CountContext)
    
    return(
        <p>Online: {count}</p>
    )
}