import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api"
import { TypePhoto } from "../types/TypePhoto"

export const PhotoDetail = () => {
   const navigate = useNavigate();
   const [photoElement, setPhotoElement] = useState<TypePhoto>();
   const { slug } = useParams();

   useEffect(() => {
      loadPhoto();
   }, [])

   const loadPhoto = async () => {
      const json = await api.getElementPhoto(slug ? parseInt(slug, 10) : 0);
      setPhotoElement(json);
   }

   const handleHomeButton = () => navigate('/');
   const handleBackButton = () => navigate(-1);

   return (
      <div>
         <button className="text-white bg-slate-700 p-2 rounded cursor-pointer hover:bg-slate-500" onClick={handleHomeButton}>Página Inicial</button>  
         <button className="text-white bg-slate-700 ml-2 p-2 rounded cursor-pointer hover:bg-slate-500" onClick={handleBackButton}>Voltar</button>
         <div className="font-medium text-slate-700 mt-5 uppercase">Foto: {photoElement ? photoElement.title : ''}</div>
         <div className="m-5">
            <img src={photoElement ? photoElement.url : ''} />
         </div>
      </div>
      
   );
}