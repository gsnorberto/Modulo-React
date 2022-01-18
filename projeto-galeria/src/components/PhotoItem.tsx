import { useNavigate } from 'react-router-dom';
import { TypePhoto } from '../types/TypePhoto'

type Props = {
   data: TypePhoto;
   numPhoto: number;
}

export const PhotoItem = ({data, numPhoto}: Props) => {
   const navigate = useNavigate();
   
   const handleAccessPhoto = () => {
      navigate(`/photo/${numPhoto}`)
   }

   return(
      <div onClick={handleAccessPhoto} className=" m-3 border-solid border-slate-400 border-2 inline-block hover:border-slate-400 hover:bg-slate-400 cursor-pointer">
         <div className="m-5">
            <img src={data.thumbnailUrl} />
         </div>
      </div>
   );
}