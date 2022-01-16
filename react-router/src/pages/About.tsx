//Ao utilizar o "Link" do react-router ele não atualiza a página novamente, apenas trás os dados já pré-carregados.
import { useNavigate } from 'react-router-dom';

const buttonClassCuston: string = "bg-stone-300 hover:bg-violet-400 hover:cursor-pointer m-1 p-3 rounded-md"

// useSearchParams = pegar os parâmentros de busca
// funciona de forma semelhante ao useState
// Usado para pegar e modificar a informação no filtro da url
// {/* http://localhost:3000/sobre?order=desc&filter=bo */}
import { Link, useSearchParams } from 'react-router-dom'

export const About = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const navigate = useNavigate();

   // Altera a ordem sem perder os outros filtros
   const setOrder = (order: 'asc' | 'desc') => {
      searchParams.set('order', order); // Altera o "order" para "asc" ou "desc"
      setSearchParams(searchParams)
   }

   const handleHomeButton = () => {
      navigate('/');
   }

   return(
      <div>
         {/* Nome do item que deseja pegar. Nesse exemplo: filter=bo (passado na url) */}
         // {/* http://localhost:3000/sobre?order=desc&filter=bo */}
         Filtro: {searchParams.get('filter')}
         <hr />
         Ordem: {searchParams.get('order')}
         <hr />

         {/* Ordena do menor para o maior */}
         <button className={buttonClassCuston} onClick={()=> setOrder('asc')}>Asc</button>

         {/* Ordena no maior para o menor */}
         <button className={buttonClassCuston} onClick={()=> setOrder('desc')}>Desc</button>

         <hr />
         Página Sobre:
         <ul > <Link to="/sobre/sara">Sara</Link> </ul>

         <ul> <Link to="/sobre/gabriel">Gabriel</Link> </ul>

         <button className={buttonClassCuston} onClick={handleHomeButton}>Home</button>
      </div>
   )
}