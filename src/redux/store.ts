import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cartSlice";
import {
  persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from './storage';



const persistOprion = {
  key: 'cart',
  storage,
}

const persistCart = persistReducer(persistOprion, cartReducer)

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: persistCart,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']