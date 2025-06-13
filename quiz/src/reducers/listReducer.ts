import { Item } from "@/types/Item";
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
}

//Reducers são o meio que um substituto pra uma state que tem varias ações
//Um reducer é uma função que decide como o estado vai mudar com base em uma ação


import { useState } from "react";

type AddAction = {
    type: "add" //type de açao que será realizada
    payload: string //carga que sera enviada para ser feita a ação, como no caso ele vai adcionarum texto o tipo é uma string
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
    payload: boolean
}

type ListActions = {

}

//Função que vai receber a lista, executa determinada ação que voce quer nela e retorna o resultado final da lista atualizada
export const ListReducer = (list: Item[] /*Lista recebida*/, action: ListActions /*ação que vai ser feita*/)
    // Executar ações



/*
import { Item } from "@/types/Item";

type addAction = {
    type: "add";
    payload: {text: string;
    }
}

type EditTextAction = {
    type: "editText";
    payload: {
        id: number;
        newText: string;
    }
}

type ToggleDoneAction = {
    type: "toggleDone";
    payload: {id: number;
    }
}

type removeAction = {
    type: "remove";
    payload: {id: number;
    }
}

type ListActions = addAction | EditTextAction | ToggleDoneAction | removeAction;

export const ListReducer = (list: Item[], action: ListActions) => {
    switch(action.type) {
        case "add":
            return [...list,
                {id: list.length,
                 text: action.payload.text,
                 done:false 
                }
              ]
        case "editText":
            return list.map(t => {
                if(t.id === action.payload.id) 
                    t.text = action.payload.newText;
                return t;
              })
        case "toggleDone":
            return list.map(t => {
                if (t.id === action.payload.id) 
                    { return {
                        ...t,
                        done: !t.done
                    };
                }
                return t;
              });
        case "remove":   
            return list.filter(t => t.id !== action.payload.id);  
        default:
            return list;
    }
}
*/