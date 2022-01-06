type Props = {
    title: string; // Obrigatório passar por parâmetro
    //title?: string; //Propriedade título opcional
}

// export const Header = (props: Props)
// Ou
export const Header = ({title}: Props) => {
    return(
      <header>
        <h1>{title}</h1>
        <hr/>
      </header>
    )
}