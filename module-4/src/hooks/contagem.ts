import { useReducer } from 'react'

type reducerState = {
   count: number; 
}
type reducerAction = {
   type: string; 
}

const initialState = {
   count: 15
}

//Sempre recebe dois parâmetros: valor atual do reducer (state) e qual ação se deseja executar(action).
const reducer = (state: reducerState, action: reducerAction) => {
   switch (action.type) {
      case 'ADD':
         return { ...state, count: state.count + 1 }
      break;

      case 'DEL':
         if (state.count > 0) {
            return { ...state, count: state.count - 1 }
         }
      break;

      case 'RESET':
         return initialState;
      break;
   }
   return state;
}

export const useContagem = () => {
   return useReducer(reducer, initialState)
}