import { MainRoutes } from './routes/MainRoutes'

function App() {

   return (
      <div className="p-4">
         <header>
            <h1>Galeria de Fotos</h1>
         </header>

         <main>
            <MainRoutes/>
         </main>

         <footer>
            <div>Todos os Direitos Reservados</div>
         </footer>
      </div>
   )
}

export default App
