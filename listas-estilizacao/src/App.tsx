//Método 1 - Importar componentes
//Cada componente fica separado em um arquivo na pasta "components"
// import { Container } from './components/Container'
// import { Botao } from './components/Botao'

//Método 2 - Importar componentes
//Todos componentes ficam em um único arquivo 
import * as C from './AppStyles';

function App() {
  return (
    <C.Container bgColor="#FF00FF">
      <span>Texto do componente.</span> 

      <a href="" className="link">Link</a>

      <C.Botao bg="#FF0000">Botão Grande</C.Botao>
      <C.Botao bg="#00FF00" small>Botão Pequeno</C.Botao>
    </C.Container>
  )
}

export default App;
