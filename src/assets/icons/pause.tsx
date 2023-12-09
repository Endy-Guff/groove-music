import {FC} from "react";

interface PauseProps {
    className?: string
}

export const Pause: FC<PauseProps> = ({className}) => (
    <svg className={className} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0C1.81 0 1.25 0.56 1.25 1.25V8.75C1.25 9.44 1.81 10 2.5 10C3.19 10 3.75 9.44 3.75 8.75V1.25C3.75 0.56 3.19 0 2.5 0ZM8.75 1.25V8.75C8.75 9.44 8.19 10 7.5 10C6.81 10 6.25 9.44 6.25 8.75V1.25C6.25 0.56 6.81 0 7.5 0C8.19 0 8.75 0.56 8.75 1.25Z" fill="#EFEEE0"/>
    </svg>

)


