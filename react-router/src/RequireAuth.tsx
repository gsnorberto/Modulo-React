//Autenticação de acesso à uma página

// Rota privada para casos de altenticação para ter acesso à página
import { Navigate } from 'react-router-dom';

type Props = {
   children: JSX.Element
}

export const RequireAuth = ({children}: Props) => {
   // Verificar se está logado. 
   // A verificação não será realizada nesse módulo do curso
   const isAuth = true;

   // Direciona para página de login se a autenticação não foi validada
   if(!isAuth) {
      return <Navigate to="/login" />;
   }

   return children;
}