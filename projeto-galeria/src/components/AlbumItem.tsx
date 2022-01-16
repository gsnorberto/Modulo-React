import { useNavigate } from 'react-router-dom'
import { Album } from '../types/TypeAlbum'

type Props = {
   data: Album;
   numAlbum: number;
}

export const AlbumItem = ({data, numAlbum}: Props) => {
   const navigate = useNavigate();

   const handleAccessAlbum = () => {
      navigate(`/album/${numAlbum}`)
   }

   return(
      <div onClick={handleAccessAlbum} className="m-5 bg-slate-400 border-solid border-2 border-sky-500 text-xl uppercase font-bold text-white hover:bg-sky-500 cursor-pointer flex justify-between">
         <div className="p-5">(Album {numAlbum+1}) {data.title}</div>
      </div>
   );
}