// Exibir lista de nomes e adicionar um novo nome com identificação única. Cada um desses nomes precisa ter um botão para remover esse nome. Também deve ter uma ação para reordenar esse nomes em ordem alfabética.
import { ChangeEvent, useState } from 'react'
import { usePeopleList } from './hooks/peopleList'

function App() {
   const [list,dispatch] = usePeopleList();
   const [nameInput, setNameInput] = useState('');

   //Adicionar
   const handleAddButton = () => {
      if(nameInput){
         dispatch({
            type: 'ADD',
            payload: {
               name: nameInput
            }
         });
         setNameInput('');
      }
   }

   // Ordenar
   const handleOrderButton = () => {
      dispatch({
         type: 'ORDER'
      })
   }

   // Deletar
   const deletePerson = (id: string) => {
      dispatch({
         type: 'DEL',
         payload:{ id }
      })
   }

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setNameInput(e.target.value)
   }

   

   return (
      <div className="p-5">
         <input className="border" type="text" value={nameInput} onChange={handleInputChange}/>

         <button className="" onClick={handleAddButton}>Adicionar</button>

         <button onClick={handleOrderButton}>Ordenar</button>

         Lista de Pessoas:
         <ul>
         {list.map((item, index) => (
            <li key={index}>
               {item.name}
               <button onClick={() => deletePerson(item.id)}> [ deletar ] </button>
            </li>
         ))}
         </ul>
      </div>
   );
}

export default App