import { useParams, useNavigate } from "react-router-dom"

const buttonClassCuston: string = "bg-stone-300 hover:bg-violet-400 hover:cursor-pointer m-1 p-3 rounded-md"

export const AboutItem = () => {
   const params = useParams();
   const navigate = useNavigate();

   // Volta 1 no histórico de acesso à aba atual
   const handleBackButton = () => {
      navigate(-1); 
   }

   // Volta para a página selecionada
   const handleHomeButton = () => {
      navigate('/');
   }

   return(

      <div>
         Página Sobre {params.slug}
         <br />
         <button className={buttonClassCuston} onClick={handleBackButton}>Voltar</button>

         <button className={buttonClassCuston} onClick={handleHomeButton}>Home</button>
      </div>
   )
}