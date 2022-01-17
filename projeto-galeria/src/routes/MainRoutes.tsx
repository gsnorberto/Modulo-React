import { useRoutes } from 'react-router-dom'

import { Home } from '../pages/Albums'
import { PageNotFound } from '../pages/NotFound'
import { Photos } from '../pages/Photos'
import { PhotoDetail } from '../pages/PhotoDetail'

export const MainRoutes = () => {
   return useRoutes([
      {path: '/', element: <Home/>},
      {path: '/album/:slug', element: <Photos/>},
      {path: '/photo/:slug', element: <PhotoDetail/>},
      {path: '*', element: <PageNotFound/>}
   ]);
}