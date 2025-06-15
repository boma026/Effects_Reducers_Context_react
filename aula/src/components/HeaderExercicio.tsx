"use client"
import { UserContext } from "@/context/UserContext"
import { useContext } from "react"

export const HeaderExercicio = () => {
    
    const userCtx = useContext(UserContext)

    const handleEditButton = () => {
        const newText = window.prompt("Editar nome", userCtx?.userOnline);
        if (!newText) return;
        userCtx?.setUserOnline(newText);
    }
    
    return (
        <header>
            <h1 className="text-3xl">Titulo da pagina</h1>
            <p>Nome do usuário online: {userCtx?.userOnline}</p>
            <button onClick={handleEditButton}> Clique aqui para mudar o nome do usuário! </button>
        </header>
    )
}