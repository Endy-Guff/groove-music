import s from './layout.module.scss'
import {Header} from "../header/header.tsx";
import {FC, PropsWithChildren} from "react";
import {NavBar} from "../nav-bar/nav-bar.tsx";
import {SoundBar} from "../sound-bar/sound-bar.tsx";

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header}/>
            <NavBar className={s.nav}/>
            <div className={s.content}>
                {children}
            </div>
            <SoundBar className={s.soundbar} track={''} poster={''} title={''} author={''} nextTrack={()=>{}} prevTrack={()=>{}}/>
        </div>
    );
};

