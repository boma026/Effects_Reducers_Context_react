"use client"

import { Square } from "@/components/Square";
import { VideoPlayer } from "@/components/VideoPlayer";
import { ListReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import Image from "next/image";
import { useReducer, useState } from "react";

export default function Home() {

const [list, dispatch] = useReducer(ListReducer, [])

const [addField, setAddField] = useState ("");

const handleAddButton = () => {
  if(addField.trim() === "") return false;

  dispatch({
    type: "add",
    payload: {
      text: addField.trim()
    }
  })

  setAddField("")
}

const handleDoneCheckbox = (id: number) => {
  dispatch({
    type: "toggleDone",
    payload: {
      id,

    }
  })
}

const handleEdit = (id: number) => {
  const item = list.find(it => it.id === id);
  if(!item) return false 
  const newText = window.prompt("Editar tarefa", item.text); 
  if(!newText || newText.trim() === "") return false

  dispatch({
    type: "editText",
    payload: {
      id,
      newText
    }
  })
}

const handleRemove = (id: number) => {
  dispatch({
    type: "remove",
    payload: { id }
  })

const [playing, setPlaying] = useState(true);

const [show, setShow] = useState(false);

  return (
    // Uso real do effect
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400">{playing? "Rodando" : "Pausado"}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Pause</button>
      </div> 

      <VideoPlayer
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      isPlaying={playing}
      />

      <div className="">
        <button onClick={() => setShow(!show)}>Mostrar/Ocultar</button>

        {show &&
          <Square/>
        }
      </div>

      <div className="container mx-auto">
        <h1 className="text-center text-4xl my-4">Lista de tarefas</h1>
        <div className="max-w-2xl flex rounded-md border border-gray-400 p-4 my-4">
          <input
            type="text"
            className="flex-1 rounded-md border border-white p-3 bg-transparent text-white"
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
        
    </div>
  );
}
