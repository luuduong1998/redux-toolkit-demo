import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)