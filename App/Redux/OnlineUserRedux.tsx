// import {createActions, createReducer} from 'reduxsauce';
// import Immutable from 'seamless-immutable';
// import {IResponse, OnlineUser, PaginationData} from '@/Models';

// /* ------------- Types and Action Creators ------------- */
// const {Types, Creators} = createActions({
//   getOnlineUserRequest: ['request'],
//   getOnlineUserSuccess: ['data'],
//   getOnlineUserFailure: ['data'],

//   getFavoriteOnlineUserRequest: ['request'],
//   getFavoriteOnlineUserSuccess: ['data'],
//   getFavoriteOnlineUserFailure: ['data'],

//   storeFavoriteOnlineUserRequest: ['user'],
//   storeFavoriteOnlineUserSuccess: ['data'],
//   storeFavoriteOnlineUserFailure: ['data'],
  
//   isFavoriteUserRequest: ['user'],
//   isFavoriteUserSuccess: ['data'],
// });

// export const OnlineUserTypes = Types;
// export const OnlineUserActions = Creators;

// export interface OnlineUserStateTypes {
//   getOnlineUserResponse: IResponse<PaginationData<OnlineUser>>;
//   getFavoriteOnlineUserResponse: IResponse<PaginationData<OnlineUser>>;
//   storeFavoriteOnlineUserResponse: IResponse<{user: OnlineUser, isFavorite: boolean}>;
//   isFavoriteOnlineUserResponse: IResponse<{user: OnlineUser, isFavorite: boolean}>;

//   merge: (params: object) => any;
// }

// /* ------------- Initial State ------------- */
// export const INITIAL_STATE: OnlineUserStateTypes = Immutable({
//   getOnlineUserResponse: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   getFavoriteOnlineUserResponse: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   storeFavoriteOnlineUserResponse: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   removeFavoriteOnlineUserResponse: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   isFavoriteOnlineUserResponse: {
//     data: null,
//     loading: false,
//     error: null,
//   }
// });

// /* ------------- GetOnlineUser ------------- */
// export const getOnlineUserRequest = (state: any) => {
//   return state.merge({
//     getOnlineUserResponse: {
//       loading: true,
//       data: null,
//       error: null,
//     }
//   });
// };

// export const getOnlineUserSuccess = (state: any, {data}: any) => {
//   return state.merge({
//     getOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };

// export const getOnlineUserFailure = (state: any, {data}: any) => {
//   return state.merge({
//     getOnlineUserResponse: {
//       loading: false,
//       data: null,
//       error: data,
//     }
//   });
// };

// /* ------------- GetFavoriteOnlineUser ------------- */
// export const getFavoriteOnlineUserRequest = (state: any, {data}: any) => {
//   return state.merge({
//     getFavoriteOnlineUserResponse: {
//       loading: false,
//       data: null,
//       error: data,
//     }
//   });
// };

// export const getFavoriteOnlineUserSuccess = (state: any, {data}: any) => {
//   return state.merge({
//     getFavoriteOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };

// export const getFavoriteOnlineUserFailure = (state: any, {data}: any) => {
//   return state.merge({
//     getFavoriteOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };

// /* ------------- StoreFavoriteOnlineUser ------------- */
// export const storeFavoriteOnlineUserRequest = (state: any, {data}: any) => {
//   return state.merge({
//     storeFavoriteOnlineUserResponse: {
//       loading: false,
//       data: null,
//       error: data,
//     }
//   });
// };

// export const storeFavoriteOnlineUserSuccess = (state: any, {data}: any) => {
//   return state.merge({
//     storeFavoriteOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };

// export const storeFavoriteOnlineUserFailure = (state: any, {data}: any) => {
//   return state.merge({
//     storeFavoriteOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };

// /* ------------- IsFavoriteOnlineUser ------------- */
// export const isFavoriteOnlineUserRequest = (state: any, {user}: any) => {
//   return state.merge({
//     isFavoriteOnlineUserResponse: {
//       loading: true,
//       data: null,
//       error: null,
//     }
//   });
// };

// export const isFavoriteOnlineUserSuccess = (state: any, {data}: any) => {
//   return state.merge({
//     isFavoriteOnlineUserResponse: {
//       loading: false,
//       data: data,
//       error: null,
//     }
//   });
// };
// /* ------------- Hookup Reducers To Types ------------- */
// export const reducer = createReducer(INITIAL_STATE, {
//   // [Types.GET_ONLINE_USER_REQUEST]: getOnlineUserRequest,
//   // [Types.GET_ONLINE_USER_SUCCESS]: getOnlineUserSuccess,
//   // [Types.GET_ONLINE_USER_FAILURE]: getOnlineUserFailure,
  
//   // [Types.GET_FAVORITE_ONLINE_USER_REQUEST]: getFavoriteOnlineUserRequest,
//   // [Types.GET_FAVORITE_ONLINE_USER_SUCCESS]: getFavoriteOnlineUserSuccess,
//   // [Types.GET_FAVORITE_ONLINE_USER_FAILURE]: getFavoriteOnlineUserFailure,
  
//   // [Types.STORE_FAVORITE_ONLINE_USER_REQUEST]: storeFavoriteOnlineUserRequest,
//   // [Types.STORE_FAVORITE_ONLINE_USER_SUCCESS]: storeFavoriteOnlineUserSuccess,
//   // [Types.STORE_FAVORITE_ONLINE_USER_FAILURE]: storeFavoriteOnlineUserFailure,
  
//   // [Types.IS_FAVORITE_ONLINE_USER_REQUEST]: isFavoriteOnlineUserRequest,
//   // [Types.IS_FAVORITE_ONLINE_USER_SUCCESS]: isFavoriteOnlineUserSuccess,
// });
