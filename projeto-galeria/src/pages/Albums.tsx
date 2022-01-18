import { useEffect, useState } from 'react';
import { api } from '../api'
import { TypeAlbum } from '../types/TypeAlbum'
import { AlbumItem } from '../components/AlbumItem'

export const Albums = () => {
   const [albums, setAlbums] = useState<TypeAlbum[]>([]);

   useEffect(() => {
      loadPosts();
   }, [])

   const loadPosts = async () => {
      let json = await api.getAllAlbums();
      setAlbums(json);
   }


   return(
      <div className="m-5">
         <div className="text-slate-700 font-bold m-5 text-xl">ÁLBUNS</div>
         <div>
            {albums.map((item, index)=>(
               <AlbumItem data={item} numAlbum={index} />
            ))}
         </div>
      </div>
   );
}