import { useEffect, useRef } from "react";

type Props = {
    src: string;
    isPlaying: boolean;
}

export const VideoPlayer = ({src, isPlaying}: Props) => {
    
    const videoTag = useRef<HTMLVideoElement>(null);

    useEffect(() => {
       isPlaying? videoTag.current?.play() : videoTag.current?.pause();
    })

    return (
        <video ref={videoTag} src={src} loop playsInline muted/>
    )
}