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
               <button className="text-white bg-slate-700 p-2 rounded cursor-pointer hover:bg-slate-500" onClick={handleHomeButton}>Página Inicial</button>
               <br />
               <div className="font-medium text-slate-700 mt-5 uppercase">Album: {album ? album.title : ''}</div>
               <br />
               {photos.map((item, index) => (
                  <PhotoItem data={item} numPhoto={item.id} />
               ))}
            </>
         }

      </div>
   );
}