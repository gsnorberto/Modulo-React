// Link Exemplo: https://jsonplaceholder.typicode.com/albums/1/photos
import { useEffect, useState } from "react"
import { api } from '../api'
import { TypePhoto } from '../types/TypePhoto'
import { TypeAlbum } from '../types/TypeAlbum'
import { PhotoItem } from '../components/PhotoItem'
import { useNavigate, useParams } from "react-router-dom"

export const Photos = () => {
   const[photos, setPhotos] = useState<TypePhoto[]>([]);
   const[albuns, setAlbuns] = useState<TypeAlbum[]>([]);
   const navigate = useNavigate();

   useEffect(() => {
      loadPhotos();
      loadAlbuns();
   }, [])

   const loadPhotos = async () => {
      // OBS: ESTÁ ESTÁTICO - MUDAR PARA DINÂMICO
      let json = await api.getAllPhotos();
      setPhotos(json)
   }
   const loadAlbuns = async () => {
      // OBS: ESTÁ ESTÁTICO - MUDAR PARA DINÂMICO
      let json = await api.getAllAlbums();
      setAlbuns(json)
   }

   const handleHomeButton = () => {
      navigate('/');
   }

   const {slug}= useParams();
   const num: number | undefined = slug ? parseInt(slug, 10) : undefined;

   return(
      <div>
         {num}
         <button onClick={handleHomeButton}>Página Inicial</button>
         <br />
         <div>NOME DO ALBUM</div>

         {photos.map((item, index) => (
            <PhotoItem data={item} numPhoto={index}/>
         ))}
      </div>
   );
}