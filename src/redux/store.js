import {configureStore,combineReducers} from '@reduxjs/toolkit'
import booksReducer from './booksSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';

  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const rootReducer = combineReducers({ books: booksReducer,});
  const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk:false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(watcherSaga);
export const persistor=persistStore(store);