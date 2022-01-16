import { useReducer } from "react";
// "v4" é o que gera números aleatórios
import { v4 as uuidV4 } from 'uuid';

//state
type Person = {
   id: string;
   name: string;
}

//action
type ActionType = {
   type: string;
   payload?: {
      name?: string;
      id?: string;
   }
}

// Valor inicial do "list" no "App.tsx" antes de ser adicionado elementos
const initialState: Person[] = [];

// "state" = array com as pessoas já cadastradas. Conteúdo do "list" no "App.tsx"
// "ActionType" = Valores inseridos pelo usuário enviado pela function "dispatch"
const reducer = (state: Person[], action: ActionType) => {
   switch(action.type){
      case 'ADD':
         if(action.payload?.name){
            const newState = [...state] //Faz uma cópia do Array com as pessoas já cadastradas

            newState.push({
               id: uuidV4(),
               name: action.payload?.name
            });

            return newState; // Retorna um array com as pessoas já cadastradas mais a que acabou de ser cadastrada. O valor será atualizado no "list"
         }
      break;

      case 'DEL':
         if(action.payload?.id){
            let newState = [...state]
            //Criando um novo array com todos elementos que são diferentes do elemento com id especificado
            newState = newState.filter(item => item.id !== action.payload?.id)
            return newState;
         }
      break;

      case 'ORDER':
         let newState = [...state]
         newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
         return newState;
      break;
   }
   return state;
}


export const usePeopleList = () => {
   return useReducer(reducer, initialState);
}