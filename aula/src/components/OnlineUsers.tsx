import { CountContext } from "@/context/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const countCtx = useContext(CountContext) //hook usado pra usar o contexto, ele recebera o "onlineCount" que é a propria variavel e o setOnlineCount que é a funçao para alteralo

    const handleButtonBan = () => {
        countCtx?.setOnlineCount(0)
    }
    return (
    <>   
        <p>Online: {countCtx?.onlineCount}</p>
        <button onClick={handleButtonBan}>Banir todo mundo</button>  
    </> 
)
}