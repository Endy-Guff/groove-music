import s from './header.module.scss'
import {Input} from "../input/input.tsx";

export const Header = () => {
    return (
        <div className={s.header}>
            <Input variant={"search"}/>
        </div>
    );
};
