// import {LocalUser, OnlineUser} from '@/Models';
// import {StorageKeys} from '@/Utils';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const create = (): any => {
//   function createDatabase(): any {
//     // AsyncStorage.setItem(
//     //   StorageKeys.localUserDatabase,
//     //   JSON.stringify([
//     //     {
//     //       seed: 'demoapp',
//     //       email: 'reactnative@jetdevs.com',
//     //       password: 'jetdevs@123',
//     //     },
//     //   ]),
//     // );
//   }

//   async function removeFavoriteOnlineUser(user: OnlineUser): Promise<any> {
//     var seed = await AsyncStorage.getItem(StorageKeys.seed);
//     if (seed != null) {
//       AsyncStorage.removeItem(
//         [StorageKeys.prefixFavorite, seed, user.id.name, user.id.value].join('_'),
//       )
//       return user
//     }
//     return null
//   }

//   async function storeFavoriteOnlineUser(user: OnlineUser): Promise<any> {
//     var seed = await AsyncStorage.getItem(StorageKeys.seed);
//     // if (seed != null) {
//     //   AsyncStorage.setItem(
//     //     [StorageKeys.prefixFavorite, seed, user.id.name, user.id.value].join('_'),
//     //     JSON.stringify(user),
//     //   )
//     //   return user
//     // }
//     return null
//   }

//   async function getFavoriteUser(data: any): Promise<any> {
//     var seed = await AsyncStorage.getItem(StorageKeys.seed);
//     var startIndex = data.page * data.pageSize;
//     var returnList = Array<OnlineUser>();
//     if (seed != null) {
//       var getAllFavoriteUser = (await AsyncStorage.getAllKeys()).filter(
//         item => item.startsWith([StorageKeys.prefixFavorite, seed].join('_')),
//       );
//       for (let i = 0; i < data.pageSize && startIndex + i < getAllFavoriteUser.length; i++) {
//         let storedUserString = await AsyncStorage.getItem(getAllFavoriteUser[startIndex + i])
//         if (storedUserString != null) {
//           returnList.push(JSON.parse(storedUserString))
//           continue
//         }
//         break
//       }
//     }
//     return returnList
//   }
//   async function isFavoriteOnlineUser(user: any): Promise<boolean> {
//     var seed = await AsyncStorage.getItem(StorageKeys.seed);
//     if (seed != null) {
//       var favoriteUser = await AsyncStorage.getItem([StorageKeys.prefixFavorite, seed, user.id.name, user.id.value].join('_'))
//       return favoriteUser != null
//     }
//     return false
//   }

//   return {
//     getFavoriteUser,
//     removeFavoriteOnlineUser,
//     storeFavoriteOnlineUser,
//     isFavoriteOnlineUser,
//   };
// };

// export default {
//   create,
// };
