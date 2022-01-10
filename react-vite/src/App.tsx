import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    //show === true ? setShow(false) : setShow(true);
    //Ou
    setShow(!show);
  }

  return(
    <div>
      {/* Alterna o nome do botão entre "Mostrar e Ocultar" */}
      <button onClick={handleClick}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {/* Se show = true ele adiciona a tag "div" */}
      {show &&
        <div>
          Texto
        </div>
      }

    </div>
  ) 
}

export default App;