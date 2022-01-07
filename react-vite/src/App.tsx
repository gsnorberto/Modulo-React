import {useState} from 'react'
import {Header} from './components/Header'

const App = () => {
  //Usando State... Mudança dinâmica
  //Cria uma state "num" com valor inicial "0" ao qual sempre que houver alteração nela, seus dados atualizarão na tela. "setnum" é a função que irá alterar o valor dessa state
  const [num, setnum] = useState(0); 
  const [name, setname] = useState('Gabriel')

  const sumNumber = () => {
    setnum(num+1); //10, 20, 30 ...
  }

  const changeName = () => {
    setname('Norberto');
  }

  return(
    <>
      <Header title = "Este é um exemplo" />

      <div>
        Valor = {num} 
        <button onClick={sumNumber}>Clique Aqui</button>
        <br />
        Nome = {name}
        <button onClick={changeName}>Clique Aqui</button>
      </div>
    </>
  ) 
}

export default App;








// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App
