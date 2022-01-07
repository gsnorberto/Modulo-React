import {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    legenda: string;
}
export const Photo = ({children, legenda}: Props) => {
    return(
        <div>
            {children}
            <p>{legenda}</p>
        </div>
    )
}