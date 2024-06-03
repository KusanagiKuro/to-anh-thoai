// import {IResponse, OnlineUser} from '@/Models';
// import { OnlineUserActions } from '@/Redux/OnlineUserRedux';
// import {Colors, Fonts, Metrics} from '@/Theme';
// import {MaterialIcon} from '@/Theme/Icons';
// import {
//   copyText,
//   useDidMountEffect,
// } from '@/Utils';
// import moment from 'moment';
// import React, {useEffect, useState} from 'react';
// import {Pressable, StyleSheet, Text, View} from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';

// interface Props {
//   user: OnlineUser;
// }

// export default function OnlineUserCard(props: Props) {
//   const dispatch = useDispatch()
//   const {user} = props
//   // Selectors
//   const isFavoriteResponse: IResponse<{user: OnlineUser, isFavorite: boolean}> = useSelector(
//     (state: any) => state.onlineUser.isFavoriteOnlineUserResponse,
//   );
//   // Dispatchers
//   const isFavoriteUser = (params: any) => dispatch(OnlineUserActions.isFavoriteOnlineUserRequest(params));
//   const toggleFavorite = (params: any) => dispatch(OnlineUserActions.storeFavoriteUserRequest(params));
//   // States
//   const [isFavorite, changeFavoriteStatus] = useState<boolean>(false)
//   // Hooks
//   const checkFavorite = useDidMountEffect(() => {
//     if (isFavoriteResponse.data != null) {
//       if ([isFavoriteResponse.data.user.id.name, isFavoriteResponse.data.user.id.value].join('_') == [user.id.name, user.id.value].join('_')) {
//         changeFavoriteStatus(isFavoriteResponse.data.isFavorite)
//       }
//     }
//   }, [isFavoriteResponse])
//   const updateFavoriteForUser = () => {
//     toggleFavorite({user, isFavorite: !isFavorite})
//   }
//   const onInit = useDidMountEffect(() => {
//     isFavoriteUser(user)
//   }, [])
//   //
//   const userName = [user.name.title, user.name.first, user.name.last].join(" ")
//   const dob = user.dob.date
//   return (
//     <View style={styles.card}>
//       <View style={styles.topPart}>
//         <View style={styles.topPartText}>
//           <Text style={styles.senderText}>{userName}</Text>
//           <Text style={styles.timeText}>
//             {moment(dob).format('DD/MM/YYYY')}
//           </Text>
//         </View>
//       </View>
//       <View style={styles.divider} />
//       <View>
//         <View>
//           <Text
//             style={styles.message}>
//             {user.email}
//           </Text>
//           <Text
//             style={styles.message}>
//             {user.phone}
//           </Text>
//         </View>
//         <Pressable onPress={toggleFavorite}>
//           <MaterialIcon name={isFavorite ? 'favorite' : 'favorite-outline'} />
//         </Pressable>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 8,
//     backgroundColor: Colors.white,
//     padding: Metrics.doubleBaseMargin,
//     marginHorizontal: Metrics.doubleBaseMargin,
//     marginBottom: Metrics.doubleBaseMargin,
//     elevation: 5,
//   },
//   topPart: {
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginBottom: Metrics.baseMargin,
//   },
//   topPartText: {
//     flex: 1,
//   },
//   bottomPart: {
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     flex: 1,
//   },
//   divider: {
//     height: 1,
//     width: '100%',
//     backgroundColor: Colors.lightGrey,
//     marginBottom: Metrics.baseMargin,
//   },
//   senderText: {
//     fontSize: Fonts.size.medium,
//     color: Colors.primary,
//     fontWeight: '600',
//   },
//   timeText: {
//     fontSize: Fonts.size.regular,
//     color: Colors.grey,
//   },
//   statusButton: {
//     paddingVertical: Metrics.baseMargin,
//     paddingHorizontal: Metrics.halfTripleBaseMargin,
//     borderRadius: 16,
//   },
//   statusButtonText: {
//     fontSize: Fonts.size.regular,
//     color: Colors.white,
//   },
//   message: {
//     fontSize: Fonts.size.regular,
//   },
// });
