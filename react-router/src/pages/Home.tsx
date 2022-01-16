import { useNavigate } from 'react-router-dom'
const buttonClassCuston: string = "bg-stone-300 hover:bg-violet-400 hover:cursor-pointer m-1 p-3 rounded-md"

export const Home = () => {
   const navigate = useNavigate();

   const handleAboutButton = () => {
      navigate('/sobre');
   }

   return(
      <div>
         <h1>Home</h1>
         <br />
         <ul>
            <li>Gabriel Norberto</li>
            <li>Sara Marques</li>
         </ul>
         <button className={buttonClassCuston} onClick={handleAboutButton}>Sobre</button>
      </div>
   )
}