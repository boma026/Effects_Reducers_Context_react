/*import { Item } from "@/types/Item";
import { useState } from "react";
const [list, setList] = useState<Item[]>([]);

const addNewItem = (text: string) => {
    setList([...list , {
        id:list.length,
        text: text,
        done: false
    }])
}

const editItemText = (id:number, newText: string) => {
    setList(list.map((item) => {
        if(item.id === id)
            item.text = newText;
        return item;
    }))
    }

const toggleItem = (id:number) => {
    setList(list.map((item) => {
        if(id === item.id)
            item.done = !item.done;
        return item;
    }))
}

const removeItem = (id:number) => {
    setList(list.filter((item) => id !== item.id))
}*/

//Reducers são meio que um substituto pra uma state que tem varias ações, como o exemplo acima
//Um reducer é uma função que decide como o estado vai mudar com base em uma ação


import { Item } from "@/types/Item";
import { useState } from "react";

type AddAction = {
    type: "add" //type de açao que será realizada
    payload: string //carga que sera enviada para ser feita a ação, como no caso ele vai adcionar um texto o tipo é uma string
}

type EditTextAction = {
    type: "edit"
    payload: {
        id: number,
        newText: string
    }
}

type ToggleDoneAction = {
    type: "toggle",
    payload: number
}

type RemoveAction = {
    type: "remove",
    payload:number
}

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;

//Função que vai receber a lista, executa determinada ação que voce quer nela e retorna o resultado final da lista atualizada
export const ListReducer = (list: Item[] /*Lista recebida*/, action: ListActions /*ação que vai ser feita*/) => {
    // Executar ações
    switch(action.type){
        case "add":
            return [...list, {
                id:list.length,
                text: action.payload,
                done: false
            }]

        case "edit":
            return list.map((item) => {
                if(item.id === action.payload.id)
                    item.text = action.payload.newText

                return item
            })

        case "toggle":
            return list.map((item) => {
                if(item.id === action.payload)
                    item.done = !item.done
                return item;
            })

        case "remove":
            return list.filter((item) => item.id !== action.payload);    
        
        default:
            return list; 
    }
}    
