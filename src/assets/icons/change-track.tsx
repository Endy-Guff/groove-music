import {FC} from "react";

interface ChangeTrackProps {
    className?: string
    direction?: 'next' | 'prev'
}

export const ChangeTrack: FC<ChangeTrackProps> = ({className, direction = 'next'}) => (
    <svg className={className} style={{rotate: direction === 'prev' ? '0deg' : '180deg'}}
         xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M13.4933 4.81329V11.1933C13.4933 12.5 12.0733 13.32 10.94 12.6666L8.17334 11.0733L5.40667 9.47329C4.27334 8.81996 4.27334 7.18662 5.40667 6.53329L8.17334 4.93329L10.94 3.33996C12.0733 2.68662 13.4933 3.49996 13.4933 4.81329Z"
            fill="white"/>
        <path
            d="M2.50668 12.62C2.23335 12.62 2.00668 12.3933 2.00668 12.12V3.88C2.00668 3.60667 2.23335 3.38 2.50668 3.38C2.78002 3.38 3.00668 3.60667 3.00668 3.88V12.12C3.00668 12.3933 2.78002 12.62 2.50668 12.62Z"
            fill="white"/>
    </svg>
)
