import { UserContext } from "@/context/UserContext"
import { OnlineUsers } from "./OnlineUsers"
import { useContext } from "react"

export const Header = () => {
    
    const context = useContext(UserContext);
    
    if(!context) {
        return <div>Carregando...</div>
    }

    const {username} = context;

    return (
        <header>
            <h1 className="text-3xl">Título da pag</h1>
            <h2 className="texto-xl">{username}</h2>
            <OnlineUsers />
        </header>
    )
}