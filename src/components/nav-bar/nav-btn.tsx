import s from './nav-bar.module.scss'
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

interface NavBtnProps {
    path: string
}

export const NavBtn: FC<PropsWithChildren<NavBtnProps>> = ({children, path}) => {
    const navigate = useNavigate();
    return (
        <button className={s.btn} onClick={() => navigate(path)}>
            {children}
        </button>
    );
};
