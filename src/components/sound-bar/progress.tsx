import s from "./sound-bar.module.scss";
import {forwardRef, MouseEvent, useEffect, useRef, useState} from "react";
import ReactPlayer from "react-player";

interface ProgressProps {
    fullDuration: number
    playingSecond: number
    handleMouseMove: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, callback: (distance: number) => void) => void
}

export const Progress = forwardRef<ReactPlayer, ProgressProps>((
    {
        fullDuration,
        handleMouseMove,
        playingSecond
    }, playerRef) => {
    const progressRef = useRef<HTMLDivElement | null>(null);
    const [distance, setDistance] = useState(0);

    const [pixelsPerSecond, setPixelsPerSecond] = useState(0)

    useEffect(() => {
        if (progressRef.current) {
            const progressWidth = progressRef.current.offsetWidth;
            setPixelsPerSecond(progressWidth / fullDuration)
        }
    }, [progressRef, fullDuration])

    const handleSeek = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        if (playerRef) {
            const containerWidth = e.currentTarget.offsetWidth;
            const seekPosition = e.nativeEvent.offsetX;
            const percentage = (seekPosition / containerWidth) * 100;
            const time = (fullDuration / 100) * percentage;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            playerRef.current.seekTo(time);
        }
    };

    return (
        <div className={s.progressWrapper} ref={progressRef} onClick={handleSeek}
             onMouseMove={(e) => handleMouseMove(e, setDistance)}
             onMouseLeave={() => setDistance(0)}>
            <div className={s.progress} style={{width: playingSecond * pixelsPerSecond + 'px'}}/>
            <div className={s.hover} style={{width: distance + 'px'}}/>
        </div>
    );
});

