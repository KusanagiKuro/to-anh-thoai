import {Middleware, configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';

import reducer from './index';
import mySaga from '../Sagas';
import logger from 'redux-logger';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
var middleware: Middleware[]
if (__DEV__) {
  middleware = [sagaMiddleware, logger];
} else {
  middleware = [sagaMiddleware]
}


// Mount it on the Store
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

// Then run the saga
sagaMiddleware.run(mySaga);
export default store;
