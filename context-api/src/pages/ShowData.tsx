import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { Context } from '../contexts/Context'

export const ShowData = () => {
   const { state, dispatch } = useContext(Context)
   return (
      <div>
         {/* Dados alterados no reducer */}
         
         Tela ShowData de {state.user.name} que tem {state.user.age} anos.<br />
         <Link to="/">Voltar para SignUp</Link>
      </div>
   );
}