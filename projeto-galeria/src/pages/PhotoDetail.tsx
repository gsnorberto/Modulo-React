import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api"

export const PhotoDetail = () => {
   const navigate = useNavigate();
   const [photoElement, setPhotoElement] = useState();

   useEffect(() => {
      loadPhoto();
   }, [])

   const loadPhoto = async () => {
      // const json = await api.getElementPhoto();
      // setPhotoElement(json);
   }

   const handleHomeButton = () => navigate('/');
   const handleBackButton = () => navigate(-1);

   return (
      <div>
         <button onClick={handleHomeButton}>Página Inicial</button>  <br />
         <button onClick={handleBackButton}>Voltar</button>
         <div>Nome da Foto</div>
         <div className="m-5">
            {/* <img src={} /> */}
         </div>
      </div>
      
   );
}