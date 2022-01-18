import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShowData } from "./pages/ShowData"
import { SignUp } from "./pages/SignUp"

import { ContextProvider } from "./contexts/Context"

function App() {

   return (
      // Em qualquer lugar dentro do "ContextProvider" terá acesso aos itens do contexto que, nesse exemplo, são "name e age"
      <ContextProvider>
         <BrowserRouter>
            <h1>Título da Página</h1> <hr />
            <Routes>
               <Route path="/" element={<SignUp />}></Route>
               <Route path="/exibir" element={<ShowData />}></Route>
            </Routes>
         </BrowserRouter>
      </ContextProvider>
   )
}

export default App;
