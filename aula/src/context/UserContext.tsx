"use client"
import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    userOnline: string,
    setUserOnline: (nome: string) => void
}

export const UserContext = createContext<null | UserContextType>(null);

type UserProviderType = {
    children: ReactNode
}

export const UserProvider = ({children}: UserProviderType) => {
    const [userOnline, setUserOnline] = useState("Boma");

    return (
        <UserContext.Provider value={{ userOnline, setUserOnline }}>
            {children}
        </UserContext.Provider>
    )
}