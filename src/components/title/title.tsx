import s from './title.module.scss'
import {ComponentPropsWithoutRef, FC} from "react";

export const Title: FC<ComponentPropsWithoutRef<'h1'>> = (props) => {
    return (
        <h1 className={s.title} {...props}/>
    );
};
