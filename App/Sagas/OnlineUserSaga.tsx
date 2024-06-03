// import {put, call} from 'redux-saga/effects';

// // Functions
// import { StorageKeys, useNetworkActivityStatusBar } from '@/Utils';

// // Redux
// import { OnlineUserActions } from '@/Redux/OnlineUserRedux';
// import AsyncStorage from 'rn-secure-storage';

// // Get list of Online User with pagination
// export function* getOnlineUser(api: any, action: any): any {
//   try {
//     useNetworkActivityStatusBar();
//     // Call API
//     const response = yield call(
//       api.getOnlineUser,
//       action.request
//     );
//     useNetworkActivityStatusBar();
//     // Check if response has error
//     if (response.ok) {
//       var responseData = response.data.results
//       var responsePagination = response.data.seeds
//       yield put(OnlineUserActions.getOnlineUserSuccess({
//         page: responsePagination.page,
//         data: responseData,
//         pageSize: action.request.pageSize,
//       }));
//     }
//   } catch (error: any) {
//     // Catch unexpected errors
//     yield put(OnlineUserActions.getOnlineUserFailure(error.toString()));
//   }
// }

// // Get List of Favorite Online User with pagination
// export function* getFavoriteOnlineUser(api: any, action: any): any {
//   try {
//     const returnList = yield api.getFavoriteUser(action.request)
//     yield put(OnlineUserActions.getFavoriteOnlineUserSuccess(returnList));
//   } catch (error: any) {
//     yield put(OnlineUserActions.getFavoriteOnlineUserFailure(error.toString()));
//   }
// }
// // Get List of Favorite Online User with pagination
// export function* storeFavoriteOnlineUser(api: any, action: any): any {
//   try {
//     if (action.isFavorite) {
//       const user = yield api.storeFavoriteOnlineUser(action.user)
//       if (user != null) {
//         yield put(OnlineUserActions.storeFavoriteOnlineUserSuccess({
//           user: user,
//           isFavorite: true
//         }))
//       }
//     } else {
//       const user = yield api.removeFavoriteOnlineUser(action.user)
//       if (user != null) {
//         yield put(OnlineUserActions.storeFavoriteOnlineUserSuccess({
//           user: user,
//           isFavorite: false
//         }))
//       }
//     }
//     yield put(OnlineUserActions.storeFavoriteOnlineUserFailure({
//       user: action.user,
//       isFavorite: null,
//     }));
//   } catch (error: any) {
//     yield put(OnlineUserActions.storeFavoriteOnlineUserFailure(error.toString()));
//   }
// }
// // Is Favorite Online User
// export function* isFavoriteOnlineUser(api: any, action: any): any {
//   try {
//     var result = yield api.isFavoriteOnlineUser(action.user)
//     yield put(OnlineUserActions.isFavoriteOnlineUserSuccess({
//       user: action.user,
//       isFavorite: result,
//     }));
//   } catch (error: any) {
//     yield put(OnlineUserActions.isFavoriteOnlineUserFailure({
//       user: action.user,
//       isFavorite: false,
//     }));
//   }
// }