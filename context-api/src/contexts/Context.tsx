import { createContext, useReducer } from 'react'
import { UserType, userInitialState, userReducer } from '../reducers/userReducer'
import { ThemeType, themeInitialState, themeReducer} from '../reducers/themeReducer'
import { reducerActionType } from '../types/reducerActionType'

type initialStateType = {
   user: UserType;   // Context do Usuário
   theme: ThemeType; // Context do tema
}
type ContextType = {
   state: initialStateType;
   dispatch: React.Dispatch<any>;
}

const initialState = {
   user: userInitialState,
   theme: themeInitialState
}


export const Context = createContext<ContextType>({ state: initialState, dispatch: () => null });

//recebe dois objetos: o state e o dispatch e executa a função userReducer dentro de "userReducer.js" passando como parâmentro esses dois objetos recebidos
const mainReducer = (state: initialStateType , action: reducerActionType) => ({
   user: userReducer(state.user, action),
   theme: themeReducer(state.theme, action)
});

//Executa uma função useReducer passando a função "mainReducer" acima e o "initialState"
//Essa função é exportada no app.tsx
export const ContextProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(mainReducer, initialState)

   return(
      <Context.Provider value={ {state, dispatch} }>
         {children}
      </Context.Provider>
   )
}








// import { createContext } from 'react';

// type ContextType = {
//    name: string;
//    age: number;
// }

// const initialState = {
//    name: 'Boniecky',
//    age: 90
// }

// export const Context = createContext<ContextType>(initialState);

// export const ContextProvider: React.FC = ({ children }) => {
//    return(
//       <Context.Provider value= {initialState}>
//          { children }
//       </Context.Provider>
//    )
// }