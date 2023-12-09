import {FC} from "react";

interface PlayProps {
    className?: string
}

export const Play: FC<PlayProps> = ({className}) => (
    <svg className={className} width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.333344 4.77269V2.95366C0.333344 0.619264 1.98563 -0.33566 4.0017 0.831537L5.57814 1.741L7.15463 2.65047C9.17069 3.81767 9.17069 5.7277 7.15463 6.8949L5.57814 7.80437L4.0017 8.71383C1.98563 9.88103 0.333344 8.92611 0.333344 6.59171V4.77269Z"
            fill="#EFEEE0"/>
    </svg>
)


