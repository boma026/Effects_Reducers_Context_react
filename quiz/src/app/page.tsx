"use client"

import { ExampleArea } from "@/components/ExampleArea";
import { Square } from "@/components/Square";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ListReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useReducer, useState } from "react";

export default function Home() {
  // Usando o reducer
  const [list, dispatch] = useReducer(ListReducer, []);
  const [addField, setAddField] = useState("");
  const [playing, setPlaying] = useState(true);
  const [show, setShow] = useState(false);
  const [onlineCount, setOnlineCount] = useState(45);

  const handleAddButton = () => {
   if(addField.trim() !== "")
    dispatch({
      type:"add",
      payload: addField.trim()
    })
    setAddField("");
  }

  const handleDoneCheckbox = (tarefaId : number) => {
    dispatch({
      type: "toggle",
      payload: tarefaId
    })
  }

  const handleEdit = (tarefaId : number) => {
    const item = list.find((it) => it.id === tarefaId);
    if (!item) return false;

    const newText = window.prompt("Editar tarefa", item.text) //Pra abrir uma janela contendo o texto anterior para mudá-lo
    if(!newText || newText?.trim() === "") return false;

    dispatch({
      type: "edit",
      payload: { id: tarefaId, newText: newText }
    })
  }

  const handleRemove = (tarefaId: number) => {
    dispatch({
      type: "remove",
      payload: tarefaId
    })
  }

    return (
      <>
        <ExampleArea title="1. video de exemplo">
          <>
            <div className="border border-white p-3 mb-4">
              <p className="text-2xl text-blue-400">{playing? "Rodando" : "Pausado"}</p>
              <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Pause</button>
            </div> 

            <VideoPlayer
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            isPlaying={playing}
            />
          </>
        </ExampleArea>

        <ExampleArea title="2. exemplo do cleanup">
          <>
            <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>

            {show &&
              <Square/>
            }
          </>
          </ExampleArea>

          <ExampleArea title="3. Uso do reducer">
            <div className="container mx-auto">
              <h1 className="text-center text-4xl my-4">Lista de tarefas</h1>
              <div className="max-w-2xl flex rounded-md border bg-gray-700 border-gray-400 p-4 my-4">
                <input
                  type="text"
                  className="flex-1 rounded-md border border-white text-white p-3 bg-transparent"
                  placeholder="Digite um item"
                  value={addField}
                  onChange={e => setAddField(e.target.value)}
                  />
                  <button
                    className="p-4" onClick={handleAddButton}> Adcionar
                  </button>
              </div>
              <ul className="max-w-2xl mx-auto">
                {list.map(item => (
                  <li 
                    key={item.id}
                    className="flex items-center p-3 my-3 border-b border-gray-700"
                  >
                    <input
                      type="checkbox"
                      className="w-6 h-6 mr-4"
                      checked={item.done}
                      onChange={() => handleDoneCheckbox(item.id)}
                    />
                    <p className="flex-1 text-lg">{item.text}</p>
                    <button onClick={() => handleEdit(item.id)} className="mx-4 text-white hover:text-gray-500">Editar</button>
                    <button onClick={() => handleRemove(item.id)}className="mx-4 text-white hover:text-gray-500">Excluir</button>  
                    </li>
                ))}
              </ul>
              
            </div>
          </ExampleArea>
        </>
    );
}
