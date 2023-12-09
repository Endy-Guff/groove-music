import s from "./sound-bar.module.scss";
import {FC, MouseEvent, useEffect, useRef, useState} from "react";
import {Volume as VolumeIcon} from "../../assets/icons/volume.tsx";
import {Mute} from "../../assets/icons/mute.tsx";

interface VolumeProps {
    volume: number
    isMuted: boolean
    handleMouseMove: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, callback: (distance: number) => void) => void
    setVolume: (volume: number) => void
    setIsMuted: (isMuted: boolean) => void
}

export const Volume: FC<VolumeProps> = ({handleMouseMove, volume, setVolume, setIsMuted, isMuted}) => {
    const volumeRef = useRef<HTMLDivElement | null>(null);

    const [volumeDistance, setVolumeDistance] = useState(0);
    const [pixelsPerVolume, setPixelsPerVolume] = useState(0);

    useEffect(() => {
        if (volumeRef.current) {
            const progressWidth = volumeRef.current.offsetWidth;
            setPixelsPerVolume(progressWidth / 1)
        }
    }, [volumeRef])

    const handleVolume = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const containerWidth = e.currentTarget.offsetWidth;
        const seekPosition = e.nativeEvent.offsetX;
        const percentage = (seekPosition / containerWidth) * 100;
        const volume = (1 / 100) * percentage;
        setVolume(volume)
    };

    return (
        <div className={s.volumeWrapper}>
            <button className={s.muteBtn} onClick={() => setIsMuted(!isMuted)}>
                {isMuted ? <Mute/> : <VolumeIcon/>}
            </button>
            <div className={s.volumeProgressBox} ref={volumeRef} onClick={handleVolume}
                 onMouseMove={(e) => handleMouseMove(e, setVolumeDistance)}
                 onMouseLeave={() => setVolumeDistance(0)}>
                <div className={s.volumeProgress} style={{width: volume * pixelsPerVolume + 'px'}}/>
                <div className={s.volumeHover} style={{width: volumeDistance + 'px'}}/>
            </div>
        </div>
    );
};
