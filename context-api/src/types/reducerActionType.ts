export type reducerActionType = {
   type: string; // Tipo de ação que deseja executar. Ex: 'ADD', 'DEL'
   payload: {
      [key: string]: any; //qualquer propriedade de qualquer valor
   } // São os dados utilizados para efetuar a ação. Ex: Name: Gabriel, idade: 25, etc.
}