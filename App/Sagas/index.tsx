import {all, takeLatest} from 'redux-saga/effects';

// Apis
import { AuthTypes } from '@/Redux/AuthRedux';
// import { OnlineUserTypes } from '@/Redux/OnlineUserRedux';
// import OnlineUserAPI from '@/Services/OnlineUserService';
// import DatabaseService from '@/Services/DatabaseService';
import { loginSaga, logoutSaga } from './AuthSaga';
// import { getFavoriteOnlineUser, getOnlineUser, storeFavoriteOnlineUser } from './OnlineUserSaga';

// const userApi = OnlineUserAPI.create()
// const database = DatabaseService.create()

export default function* rootSaga() {
  // Auth
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, loginSaga),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logoutSaga),
    // takeLatest(OnlineUserTypes.GET_ONLINE_USER_REQUEST, getOnlineUser, userApi),
    // takeLatest(OnlineUserTypes.GET_FAVORITE_ONLINE_USER_REQUEST, getFavoriteOnlineUser, database),
    // takeLatest(OnlineUserTypes.STORE_FAVORITE_ONLINE_USER_REQUEST, storeFavoriteOnlineUser, database),
  ]);
}
