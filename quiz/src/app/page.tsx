"use client"

import { VideoPlayer } from "@/components/VideoPlayer";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

const [playing, setPlaying] = useState(true);

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
    </div>
  );
}
