// Link Exemplo: https://jsonplaceholder.typicode.com/albums/1/photos
import { useEffect, useState } from "react"
import { api } from '../api'
import { TypePhoto } from '../types/TypePhoto'
import { TypeAlbum } from '../types/TypeAlbum'
import { PhotoItem } from '../components/PhotoItem'
import { useNavigate, useParams } from "react-router-dom"

export const Photos = () => {
   const [photos, setPhotos] = useState<TypePhoto[]>([]);
   const [album, setAlbum] = useState<TypeAlbum>()
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const { slug } = useParams();

   useEffect(() => {
      loadPhotos();
      loadAlbum();
   }, [])

   const loadPhotos = async () => {
      // OBS: ESTÁ ESTÁTICO - MUDAR PARA DINÂMICO
      setLoading(true);
      let json = await api.getAllPhotos(slug ? parseInt(slug, 10) : 0);
      setPhotos(json)
      setLoading(false);
   }
      const loadAlbum = async () => {
      setLoading(true);
      let json = await api.getElementAlbum(slug ? parseInt(slug, 10) : 0)
      setAlbum(json)
      setLoading(false);
   }
   
   const handleHomeButton = () => {
      navigate('/');
   }

   return (
      <div>
         {loading &&
            <div>Carregando...</div>
         }

         {!loading &&
            <>
               <button onClick={handleHomeButton}>Página Inicial</button>
               <br />
               Album: {album ? album.title : ''}
               <br />
               {photos.map((item, index) => (
                  <PhotoItem data={item} numPhoto={index} />
               ))}
            </>
         }

      </div>
   );
}