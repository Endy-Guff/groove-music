import s from './glass-card.module.scss'
import {FC, PropsWithChildren} from "react";
import cn from "classnames";

interface GlassCardProps {
    className?: string
}

export const GlassCard: FC<PropsWithChildren<GlassCardProps>> = ({children, className = ''}) => {
    return (
        <div className={cn(s.wrapper, className)}>
            {children}
        </div>
    );
};
