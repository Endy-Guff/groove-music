import s from './input.module.scss'
import {ComponentPropsWithoutRef, ElementType, FC} from "react";
import cn from 'classnames'
import {Search} from "../../assets/icons/search.tsx";

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    icon?: ElementType
    variant: 'search' | 'authorization'
    mb?: number
}

export const Input: FC<InputProps> = ({mb = 0, icon: Component = Search, variant, value, ...rest}) => {
    return (
        <div className={cn(s.wrapper, s[variant])} style={{marginBottom: mb}}>
            {variant === 'search' && !value && <Component className={s.icon}/>}
            <input className={s.input} value={value} {...rest}/>
        </div>
    );
};

