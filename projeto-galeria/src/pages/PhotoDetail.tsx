import { useNavigate } from "react-router-dom";

export const PhotoDetail = () => {
   const navigate = useNavigate();

   const handleHomeButton = () => {
      navigate('/');
   }

   const handleBackButton = () => {
      navigate(-1);
   }

   return (
      <div>
         <button onClick={handleHomeButton}>Página Inicial</button>
         <br />
         <button onClick={handleBackButton}>Voltar</button>

         <div>Nome da Foto</div>
      </div>
      
   );
}