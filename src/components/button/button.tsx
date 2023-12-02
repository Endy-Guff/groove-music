import s from './button.module.scss'
import {ComponentPropsWithoutRef, FC} from "react";
import cn from "classnames";

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
    variant?: 'authorization'
}

export const Button: FC<ButtonProps> = ({variant = '', ...rest}) => {
    return (
        <button className={cn(s.btn, s[variant])} {...rest}/>
    );
};

