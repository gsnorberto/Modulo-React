// Quando usar o reducer em vez do state?
// O reducer só é recomendado quando se há problemas mais complexos para se resolver. Ex: Quando você não tem apenas um valor único mas sim uma lista de valores, objetos e arrays com vários valores, etc.
import { useReducer } from 'react' 

type reducerState = {
   count: number; // 0,1,2,3 ...
}
type reducerAction = {
   type: string; // ADD, DELL ou RESET
}

const initialState = {count: 15};

//Sempre recebe dois parâmetros: valor atual do reducer (state) e qual ação se deseja executar(action).
const reducer = (state:reducerState, action:reducerAction) => {
   switch(action.type){
      case 'ADD':
         return{...state, count: state.count + 1}
      break;
      case 'DEL':
         return{...state, count: state.count - 1}
      break;
      case 'RESET':
         return initialState;
   }
   return state;
}

function App() {
   // state = (Imutável- Nenhuma alteração é feita diretamente nele) Tem acesso ao valor. Nesse caso é o número. 
   // dispatch = Roda a função Reducer
   // reducer = função que retorna um novo state
   // initialState =  valor inicial do "state"
   const[state, dispatch] = useReducer(reducer, initialState);

   return (
      <div>
         <div className="m-3">Contagem: {state.count}</div>
         
         <hr />

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700" onClick={()=>dispatch({type: 'ADD'})}>Adicionar</button>

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700" onClick={()=>dispatch({type: 'DEL'})}>Remover</button>

         <button className = "p-3 m-2 bg-cyan-700 rounded-md text-white hover:bg-sky-700"  onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
      </div>
   );
}

export default App