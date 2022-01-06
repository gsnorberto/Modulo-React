import React from 'react'

import {Header} from './components/Header'

const App = () => {
  let name: string = "Gabriel";
  let lastName: string = "Norberto";
  let n1: number = 10;
  let n2: number = 3;
  let link: string = "http://www.google.com"

  // Criando em formato React
  // return React.createElement('div', null, 'Olá Mundo!')
  
  // Criando em formato HTML (faz o mesmo que o código acima).
  // Será convertivo pelo compilador chamado Babel que vai converter o código para o modelo acima.

  function subtrair(n1: number, n2:number){
    return n1-n2;
  }

  return(
    <>
    <Header title = "Este é um exemplo" />

    <div>Olá {name}, tudo bem?</div>
    <div>Multiplicação: {n1 * n2}</div>
    <div>Subração com função: {subtrair(n1, n2)}</div>
    <div>Meu nome é {`${name.toUpperCase()} ${lastName}`}</div>
    <a href={link}>Acessar Google</a>
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
