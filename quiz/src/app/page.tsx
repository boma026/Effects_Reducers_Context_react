"use client"

import { Header } from "@/components/Header";
import { Square } from "@/components/Square";
import { VideoPlayer } from "@/components/VideoPlayer";
import { CountContext} from "@/context/CountContext";
import { UserProvider } from "@/context/UserContext";
import { ListReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import Image from "next/image";
import { useReducer, useState } from "react";

export default function Home() {
  const [list, dispatch] = useReducer(ListReducer, []);
  const [addField, setAddField] = useState("");
  const [playing, setPlaying] = useState(true);
  const [show, setShow] = useState(false);

  const [onlineCount, setOnlineCount] = useState(45);

  const handleAddButton = () => {
    if (addField.trim() === "") return;

    dispatch({
      type: "add",
      payload: {
        text: addField.trim()
      }
    });

    setAddField("");
  };

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id }
    });
  };

  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if (!item) return;
    const newText = window.prompt("Editar tarefa", item.text);
    if (!newText || newText.trim() === "") return;

    dispatch({
      type: "editText",
      payload: { id, newText }
    });
  };

  const handleRemove = (id: number) => {
    dispatch({
      type: "remove",
      payload: { id }
    });
  };

  
    return (
      // Uso real do effect
      <UserProvider>
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
        {/* uso do context*/}
        <div className="container mx-auto">
          <CountContext.Provider value={{ onlineCount, setOnlineCount }}>
            <Header />
          </CountContext.Provider>
          
        </div>
      </div>
      </UserProvider>
    );
  }
