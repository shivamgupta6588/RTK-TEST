import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi} from '../Slice/pokemonApi.js'
import { notesApi } from '../Slice/api.js';
import notesSlice from '../Slice/notesSlice';

export const store = configureStore({
  reducer: {
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    [notesApi.reducerPath]:notesApi.reducer,
      notes:notesSlice,
    // counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(notesApi.middleware),

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)