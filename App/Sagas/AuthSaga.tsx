import {put} from 'redux-saga/effects';

// Functions
import { StorageKeys } from '@/Utils';

// Redux
import { AuthActions } from '@/Redux/AuthRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalUser } from '@/Models';

export function* loginSaga(action: any): any {
  try {
  const userData = JSON.parse(yield AsyncStorage.getItem(StorageKeys.localUserDatabase)) as Array<LocalUser>
  const indexOfEmail = userData.findIndex(item => item.email === action.email)
  if (indexOfEmail != 1) {
    yield put(AuthActions.loginFailure("Email does not exist"))
    return
  }
  if (userData[indexOfEmail].password === action.password) {
    yield put(AuthActions.loginSuccess(userData[indexOfEmail]))
    yield AsyncStorage.setItem(StorageKeys.seed, "", {})
    return
  }
  yield put(AuthActions.loginFailure("Incorrect password"));
} catch (error: any) {
  yield put(AuthActions.logoutFailure(error.toString()));
}
}

export function* logoutSaga(_: any): any {
  try {
    yield AsyncStorage.clear()
    yield put(AuthActions.logoutSuccess());
  } catch (error: any) {
    yield put(AuthActions.logoutFailure(error.toString()));
  }
}