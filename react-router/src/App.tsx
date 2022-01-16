//O router faz com que a todas as páginas já venham pré-carregadas em uma única requisição. 

import { MainRoutes } from './routes/MainRoutes'

function App() {
   
   return (
      <div className="p-4">
         <header>
            <h1>Título do site</h1>
         </header> <hr />

         <div className="py-4">
            {/* Criação das rotas */}
            <MainRoutes/>
         </div> <hr />
         
         <footer>
            Todos os direitos reservados.
         </footer>
      </div>
   )
}

export default App;
