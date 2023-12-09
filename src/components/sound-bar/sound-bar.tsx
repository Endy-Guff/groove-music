import s from './sound-bar.module.scss'
import {GlassCard} from "../glass-card/glass-card.tsx";
import {useState, MouseEvent, FC, useRef,} from "react";
import {Play} from "../../assets/icons/play.tsx";
import {Pause} from "../../assets/icons/pause.tsx";
import cn from "classnames";
import {ChangeTrack} from "../../assets/icons/change-track.tsx";
import ReactPlayer from "react-player";
import {Progress} from "./progress.tsx";
import {Volume} from "./volume.tsx";

interface SoundBarProps {
    className?: string
    track: string
    poster: string
    title: string
    author: string
    nextTrack: () => void
    prevTrack: () => void
}

export const SoundBar: FC<SoundBarProps> = ({className, title, author, poster, track, prevTrack, nextTrack}) => {
    const playerRef = useRef<ReactPlayer | null>(null);

    const [volume, setVolume] = useState(0.5);
    const [playingSecond, setPlayingSecond] = useState(0);
    const [fullDuration, setFullDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, callback: (distance: number) => void) => {
        const lineElement = e.currentTarget;
        const {left} = lineElement.getBoundingClientRect();
        const mouseX = e.clientX;

        const distanceFromLeft = mouseX - left;
        callback(distanceFromLeft);
    };

    const handlePlay = () => {
        if (playerRef.current) {
            playerRef.current.getInternalPlayer().play()
        }
    };

    const handlePause = () => {
        if (playerRef.current) {
            playerRef.current.getInternalPlayer().pause()
        }
    };

    const playPauseHandler = () => {
        if (isPlaying) {
            setIsPlaying(false)
            handlePause();
        } else {
            setIsPlaying(true)
            handlePlay();
        }
    }

    return (<>
            <ReactPlayer
                className={s.player}
                ref={playerRef}
                controls={false}
                url={track}
                onDuration={setFullDuration}
                onProgress={({playedSeconds}) => setPlayingSecond(playedSeconds)}
                volume={volume}
                muted={isMuted}
            />
            <div className={cn(s.wrapper, className)}>
                <Progress fullDuration={fullDuration} playingSecond={playingSecond} handleMouseMove={handleMouseMove}
                          ref={playerRef}/>
                <GlassCard className={s.content}>
                    <div className={s.titleBlock}>
                        <img className={s.poster} src={poster}/>
                        <span className={s.title}>{title}</span>
                        <span className={s.name}>{author}</span>
                    </div>
                    <div className={s.btnBox}>
                        <button className={s.navBtn} onClick={prevTrack}>
                            <ChangeTrack direction={'prev'}/>
                        </button>
                        <button className={cn(s.navBtn, s.play)}
                                onClick={playPauseHandler}>
                            {isPlaying ?
                                <Pause/> :
                                <Play/>}
                        </button>
                        <button className={s.navBtn} onClick={nextTrack}>
                            <ChangeTrack direction={'next'}/>
                        </button>
                    </div>
                    <Volume handleMouseMove={handleMouseMove} volume={volume} setVolume={setVolume}
                            setIsMuted={setIsMuted} isMuted={isMuted}/>
                </GlassCard>
            </div>
        </>
    );
};
