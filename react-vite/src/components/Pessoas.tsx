type Props = {
    data: {
        name: string;
        age: number;
    }
}

export const Pessoas = ({data}: Props) => {
    return(
        <li>
            {data.name} - {data.age} anos.
        </li>
    )
}