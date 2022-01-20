import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { ContextProvider } from './contexts/Context'

ReactDOM.render(
  // Em qualquer lugar dentro do "ContextProvider" terá acesso aos itens do contexto que, nesse exemplo, são "name e age"
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
