//ESTADO INICIAL E AS FUNÇÕES REDUCER QUE IRÃO MODIFICAR O ESTADO DO OBJETO ATRAVÉS DE UMA AÇÃO

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: 'user',
   initialState: {
      name: 'Gabriel',
      age: 25
   },
   reducers: {
      setName: (state, action) => {
         state.name = action.payload;
      },
      setAge: (state, action) => {
         state.age = action.payload;
      }
   }
})

export const { setName, setAge } = slice.actions;
export default slice.reducer;