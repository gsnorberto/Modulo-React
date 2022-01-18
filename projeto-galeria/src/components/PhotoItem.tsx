import { useNavigate } from 'react-router-dom';
import { TypePhoto } from '../types/TypePhoto'

type Props = {
   data: TypePhoto;
   numPhoto: number;
}

export const PhotoItem = ({data, numPhoto}: Props) => {
   const navigate = useNavigate();
   
   const handleAccessPhoto = () => {
      navigate(`/photo/${numPhoto+1}`)
   }

   return(
      <div onClick={handleAccessPhoto} className=" m-3 border-solid border-black border-2 inline-block hover:border-gray-300 cursor-pointer">
         <div className="m-5">
            <img src={data.thumbnailUrl} />
         </div>
      </div>
   );
}