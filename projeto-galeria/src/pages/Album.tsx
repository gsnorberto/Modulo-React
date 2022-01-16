// Link Exemplo: https://jsonplaceholder.typicode.com/albums/1/photos
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from '../api'
import { TypePhoto } from '../types/TypePhoto'
import { Photo } from './Photo'

export const Album = () => {
   const[photos, setPhotos] = useState<TypePhoto[]>([]);
   const params = useParams()
   const num = params.slug;

   useEffect(() => {
      loadPhotos();
   }, [])

   const loadPhotos = async () => {
      // OBS: ESTÁ ESTÁTICO - MUDAR PARA DINÂMICO
      let json = await api.getAllPhotos('1');
      setPhotos(json)
   }

   return(
      <div>
         <div>FOTOS: </div>
         {photos.map((item,index) => (
            <Photo />
         ))}
      </div>
   );
}