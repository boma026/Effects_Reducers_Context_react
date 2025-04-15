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
                if (t.id === action.payload.id) t.done = !t.done;
                    return t;
              })
        case "remove":   
            list.filter(t => t.id !== action.payload.id);  
        default:
            return list;
    }
}
