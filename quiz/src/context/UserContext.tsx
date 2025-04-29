import { createContext, ReactNode, useState } from "react";

type UserContextType = {
    username: string,
    setUsername: (name: string) => void;
}

export const UserContext = createContext <null | UserContextType> (null);

type Props = {
    children: ReactNode
}

export const UserProvider = ({ children }: Props) => {
    const [username, setUsername] = useState("Visitante");

    return (
        <UserContext.Provider value={{ username, setUsername}}>
            {children} 
        </UserContext.Provider>

    )
}