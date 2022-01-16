import { Routes, Route, useRoutes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { AboutItem } from '../pages/AboutItem'
import { NotFound } from '../pages/NotFound'
import { RequireAuth } from '../RequireAuth'

export const MainRoutes = () => {
   // MÉTODO 1 - CRIAÇÃO DE ROTAS
   // Criar rotas em forma de objeto
   return useRoutes([
      { path: '/', element: <Home /> },
      { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
      { path: '/sobre/:slug', element: <AboutItem /> },
      { path: '*', element: <NotFound /> }
   ]);

   // MÉTODO 2 - CRIAÇÃO DE ROTAS
   // Forma tradicional
   // return (
   //    <Routes>
   //       <Route path="/" element={<Home />} />
   //       <Route path="/sobre" element={
   //          <RequireAuth>
   //             <About />
   //          </RequireAuth>
   //       } />
   //       <Route path="/sobre/:slug" element={<AboutItem />} />
   //       <Route path="*" element={<NotFound />} />
   //    </Routes>
   // );
}