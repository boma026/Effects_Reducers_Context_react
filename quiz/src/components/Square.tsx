//Uso do cleanup 

import { useEffect } from "react"

export const Square = () => {
    
    useEffect(() => {
        console.log("rodou o effect")

        return () => {
            alert("Desconectou")
        }
    })

    return (
        <div className="w-40 h-40 bg-red-400">

        </div>
    )
}