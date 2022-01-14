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

const initialState: Person[] = [];

const reducer = (state: Person[], action: ActionType) => {
   switch(action.type){
      case 'ADD':
         if(action.payload?.name){
            const newState = [...state]

            newState.push({
               id: uuidV4(),
               name: action.payload?.name
            });

            return newState;
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