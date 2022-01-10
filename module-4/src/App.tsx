import { ChangeEvent, useEffect, useState } from 'react';

function App() {

  const[name,setName] = useState('Gabriel')
  const[lastName,setLastName] = useState('Norberto')
  const[fullName, setFullName] = useState('')

  // Toda vez que houver uma modificação no "name" OU "lastName" o "useEffect" será executado
  useEffect(()=>{
    setFullName(`${name} ${lastName}`)
  }, [name, lastName] )

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName( e.target.value )
  }
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName( e.target.value )
  }

  return (
    <div>
      <input type="text" placeholder="digite seu NOME" value={name} onChange={handleNameChange}/>
      <input type="text" placeholder="digite seu SOBRENOME" value={lastName} onChange={handleLastNameChange} />
       Nome Completo: {fullName}
    </div>
  )
}

export default App
