import {combineReducers} from 'redux';

const reducers = combineReducers({
  // app: require('./AppRedux').reducer,
  // onlineUser: require('./OnlineUserRedux').reducer,
  auth: require('./AuthRedux').reducer,
});

export default reducers;