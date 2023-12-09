import {FC} from "react";

interface MuteProps {
    className?: string
}

export const Mute: FC<MuteProps> = ({className}) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
         fill="none">
        <path
            d="M10.515 2.83504C9.675 2.37004 8.6025 2.49004 7.5075 3.17254L5.3175 4.54504C5.1675 4.63504 4.995 4.68754 4.8225 4.68754H4.125H3.75C1.935 4.68754 0.9375 5.68504 0.9375 7.50004V10.5C0.9375 12.315 1.935 13.3125 3.75 13.3125H4.125H4.8225C4.995 13.3125 5.1675 13.365 5.3175 13.455L7.5075 14.8275C8.1675 15.24 8.8125 15.4425 9.4125 15.4425C9.8025 15.4425 10.1775 15.3525 10.515 15.165C11.3475 14.7 11.8125 13.7325 11.8125 12.4425V5.55754C11.8125 4.26754 11.3475 3.30004 10.515 2.83504Z"
            fill="#EFEEE0"/>
        <path d="M13.4 1.30005L2 16" stroke="#EFEEE0" stroke-linecap="round"/>
    </svg>
)
