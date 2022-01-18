import { MainRoutes } from './routes/MainRoutes'

function App() {

   return (
      <div className="p-4 bg-slate-200">
         <header>
            <h1 className="text-slate-700 font-bold m-2 mb-5 text-3xl uppercase">Galeria de Fotos</h1>
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
