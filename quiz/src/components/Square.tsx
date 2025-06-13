//Uso do cleanup 

import { useEffect } from "react"

export const Square = () => {
    //effect apenas pra testar a funcionalidade de cleanup
    useEffect(() => {
        console.log("rodou o effect");

        return () => {
            //serve pra remover alguma funcionalidade (caso precisde) de alguma funcionalidade adcionada ao useeffect
            console.log("Rodou o cleanup");
        }
    })

    return (
        <div className="w-40 h-40 bg-red-400">

        </div>
    )
}