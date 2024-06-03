// import {createActions, createReducer} from 'reduxsauce';
// import Immutable from 'seamless-immutable';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { StorageKeys } from '@/Utils';

// /* ------------- Types and Action Creators ------------- */
// const {Types, Creators} = createActions({
//   showLoadingPopup: [''],
//   hideLoadingPopup: [''],

//   storeErrorLog: ['data'],
//   setErrorLog: ['data'],
// });

// export const AppTypes = Types;
// export const AppActions = Creators;

// export interface AppStateTypes {
//   isLoadingPopupVisible: boolean;
//   errorLog: Array<string> | null;

//   merge: (params: object) => any;
// }

// /* ------------- Initial State ------------- */
// const INITIAL_STATE: AppStateTypes = Immutable({
//   isLoadingPopupVisible: false,
//   errorLog: null,
// });

// export const showLoadingPopup = (state: AppStateTypes) => {
//   return state.merge({isLoadingPopupVisible: true});
// };

// export const hideLoadingPopup = (state: AppStateTypes) => {
//   return state.merge({isLoadingPopupVisible: false});
// };

// export const setErrorLog = (state: AppStateTypes, {data}: any) => {
//   return state.merge({errorLog: data});
// };

// export const storeErrorLog = (state: AppStateTypes, {data}: any) => {
//   const {errorLog} = state;
//   var newErrorLog
//   if (errorLog == null) {
//     newErrorLog = [data]
//   }else if (errorLog.length > 1000) {
//     newErrorLog = [...errorLog.slice(1), data]
//   } else {
//     newErrorLog = [...errorLog, data]
//   }
//   // AsyncStorage.setItem(StorageKeys.errorLog, JSON.stringify(newErrorLog))
//   return state.merge({errorLog: newErrorLog});
// };

// /* ------------- Hookup Reducers To Types ------------- */
// export const reducer = createReducer(INITIAL_STATE, {
//   [Types.SHOW_LOADING_POPUP]: showLoadingPopup,
//   [Types.HIDE_LOADING_POPUP]: hideLoadingPopup,
//   [Types.STORE_ERROR_LOG]: storeErrorLog,
//   [Types.SET_ERROR_LOG]: setErrorLog,
// });
