"use client"
import { createContext, ReactNode, useState } from "react";
// Inicializando o context com um numero normal
// export const countInitialData = 150 

type CountContextType = { // Para ser feita a alteraçao do conteudo de um context, criamos um type de uma "state"
    onlineCount: number,
    setOnlineCount: (n: number) => void
}

export const CountContext = createContext<null | CountContextType>(null); //inicializando o contexto que será o valor dos usuários logados, como "0"

type PropsProvider = {
    children: ReactNode;
}
//Aqui apenas com intuito de facilitar e botar o contexrt em um so arquivo fazemos o provider aqui
export const CountProvider = ({children}: PropsProvider) => {
    const [onlineCount, setOnlineCount] = useState<number>(45)

    return(
        <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
            {children}
        </CountContext.Provider>
    )
}