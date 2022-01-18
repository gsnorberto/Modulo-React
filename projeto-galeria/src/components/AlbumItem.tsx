import { useNavigate } from 'react-router-dom'
import { TypeAlbum } from '../types/TypeAlbum'

type Props = {
   data: TypeAlbum;
   numAlbum: number;
}

export const AlbumItem = ({data, numAlbum}: Props) => {
   const navigate = useNavigate();

   const handleAccessAlbum = () => {
      navigate(`/album/${numAlbum+1}`)
   }

   return(
      <div onClick={handleAccessAlbum} className="m-5 bg-slate-500 border-solid border-2 border-slate-700 text-xl uppercase font-bold text-white hover:bg-slate-700 cursor-pointer flex justify-between">
         <div className="p-5">(Album {numAlbum+1}) {data.title}</div>
      </div>
   );
}