import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/userReducer'
import themeReducer from './reducers/themeReducer'

export const store = configureStore({
   reducer: {
      user: userReducer,
      theme: themeReducer
   }
});

// Junta todos os types (user, theme, etc) em apenas 1 Type
export type RootState = ReturnType<typeof store.getState>