import s from './nav-bar.module.scss'
import {FC, PropsWithChildren} from "react";

export const NavContainer: FC<PropsWithChildren> = (props) => (
    <div className={s.container} {...props}/>
);

