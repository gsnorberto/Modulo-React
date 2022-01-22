// import { useSelector } from 'react-redux';
// import { RootState } from './redux/store'

import React from 'react';
import { useDispatch } from 'react-redux';
import { setName, setAge } from './redux/reducers/userReducer';
import { setThemeStatus } from './redux/reducers/themeReducer'
import { useAppSelector } from './redux/hooks/useAppSelector';

function App() {
   // const user = useSelector((state: RootState) => state.user)
   const dispatch = useDispatch();
   const user = useAppSelector((state: { user: any; }) => state.user)
   const theme = useAppSelector((state: { theme: any; }) => state.theme)

   const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch( setName(e.target.value) );
   }

   const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch( setAge(parseInt(e.target.value)) );
   }

   const handleSwitchTheme = () => {
      dispatch(setThemeStatus(theme.status === 'light' ? 'dark' : 'light'))
   }

   return (
      <div>
         Meu nome é {user.name} e tenho {user.age} anos. <br />
         Tema: {theme.status} <hr />

         <input type="text" value={user.name} onChange={handleNameInput} /> <hr />
         <input type="text" value={user.age} onChange={handleAgeInput} /> <hr />

         <button onClick={handleSwitchTheme}>Switch Theme</button>
      </div>
   );
}

export default App;
