import {createActions, createReducer} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { IResponse, LocalUser } from '@/Models';
import { navigate, resetRoot } from '@/Navigation/NavigationActions';
import { ScreenNames } from '@/Navigation/AppNavigator';

/* ------------- Types and Action Creators ------------- */
const {Types, Creators} = createActions({
  loginRequest: ['data'],
  loginSuccess: ['data'],
  loginFailure: ['data'],

  // logoutRequest: ['data'],
  // logoutSuccess: ['data'],
  // logoutFailure: ['data'],

  // forceLogin: ['data'],
});

export const AuthTypes = Types;
export const AuthActions = Creators;

export interface AuthStateTypes {
  loginResponse: IResponse<LocalUser>,

  merge: (params: object) => any;
}

/* ------------- Initial State ------------- */
export const INITIAL_STATE: AuthStateTypes = Immutable({
  loginResponse: {
    loading: false,
    data: null,
    error: null,
  },
});

export const loginRequest = (state: any) => {
  return state.merge({
    loginResponse: {
      loading: true,
      data: null,
      error: null,
    }
  });
};

export const loginSuccess = (state: any, {data}: any) => {
  return state.merge({
    loginResponse: {
      loading: false,
      data: data,
      error: null,
    }
  });
};

export const loginFailure = (state: any, {data}: any) => {
  return state.merge({
    loginResponse: {
      loading: false,
      data: null,
      error: data,
    }
  });
};

export const logoutRequest = (state: any) => state;

export const logoutSuccess = (state: any) => {
  resetRoot({index: 0, routes: [{name: ScreenNames.Base}]})
  return state.merge({
    loginResponse: {
      loading: false,
      data: null,
      error: null,
    }
  });
};

export const forceLogin = (state: any, {data}: any) => {
  return state.merge({
    loginResponse: {
      loading: false,
      data: data,
      error: null,
    }
  });
};

export const logoutFailure = (state: any) => state;


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  // [Types.LOGOUT_REQUEST]: logoutRequest,
  // [Types.LOGOUT_SUCCESS]: logoutSuccess,
  // [Types.LOGOUT_FAILURE]: logoutFailure,

  // [Types.FORCE_LOGIN]: forceLogin,
});
