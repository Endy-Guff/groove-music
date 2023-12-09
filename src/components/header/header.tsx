import s from './header.module.scss'
import {Input} from "../input/input.tsx";
import {FC} from "react";
import cn from 'classnames'

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = ({className}) => {
    return (
        <div className={cn(s.header, className)}>
            <Input variant={"search"}/>
        </div>
    );
};
