import { useEffect, useRef } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
}

export const VideoPlayer = ({src, isPlaying}: Props) => {
    
    const videoTag = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if(isPlaying){
            videoTag.current?.play();
        }
        else{
            videoTag.current?.pause();
        }
    })

    return (
        <video src={src} loop playsInline />
    )
}