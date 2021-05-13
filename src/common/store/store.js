import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage';
import thunk from "redux-thunk" 
import rootReducers from '../reducers';
 
const persistConfig = {
  key: 'cache',
  storage: localForage,
  blacklist: ['auth']
}
 
const persistedReducer = persistReducer(persistConfig, rootReducers)
 
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
