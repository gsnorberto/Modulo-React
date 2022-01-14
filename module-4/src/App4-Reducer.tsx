//OBS: Para utilizar esse documento defina-o (renomear) como App.tsx

import { useContagem } from './hooks/contagem'

function App() {
   const [contagem, contagemDispatch] = useContagem();

   return (
      <div>
         <div className="m-3">Contagem: {contagem.count}</div>
         <hr />

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700" onClick={()=>contagemDispatch({type: 'ADD'})}>Adicionar</button>

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700" onClick={()=>contagemDispatch({type: 'DEL'})}>Remover</button>

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700"  onClick={()=>contagemDispatch({type: 'RESET'})}>Reset</button>
      </div>
   );
}

export default App