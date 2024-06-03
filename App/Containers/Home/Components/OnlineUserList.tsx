// import React, { useEffect, useState } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   StyleProp,
//   View,
//   ViewStyle,
// } from "react-native";

// import OnlineUserCard from "./OnlineUserCard";
// import { IResponse, OnlineUser, PaginationData } from "@/Models";
// import { useDispatch, useSelector } from "react-redux";
// import { OnlineUserActions } from "@/Redux/OnlineUserRedux";
// import { showCustomMessage } from "@/Utils";

// const defaultQuery = {
//   inc: "gender,name,email,dob,phone,cell,id,picture",
// }

// export interface Props {
//   listKey?: string;
//   isFavorite: boolean;
// }

// const OnlineUserList: React.FC<Props> = (props) => {
//   const dispatch = useDispatch();
//   // Selectors
//   const response: IResponse<PaginationData<OnlineUser>> = useSelector(
//     (state: any) => props.isFavorite ? state.onlineUser.getFavoriteOnlineUserResponse : state.onlineUser.getOnlineUserResponse,
//   );

//   // States
//   const [page, setPage] = useState<number>(0)
//   const [data, setData] = useState<Array<OnlineUser> | null>(null)

//   // Dispatches
//   const action = props.isFavorite ? OnlineUserActions.getFavoriteOnlineUserRequest : OnlineUserActions.getOnlineUserRequest
//   const loadData= (params: any) => dispatch(action(params));

//   // Hooks
//   const onPageChanged = useEffect(() => {
//       loadData({
//         page,
//         pageSize: 10,
//         ...defaultQuery
//       })
//   }, [page])
//   const onResponseReceive = useEffect(() => {
//     if (response.data?.data != null) {
//       if (data != null) {
//         setData([...data, ...response.data.data!])
//       } else {
//         setData(response.data.data)
//       }
//     }
//   }, [response.data])
//   const onResponseError = useEffect(() => {
//     if (response.error != null) {
//       showCustomMessage({
//         message: response.error.toString(),
//         type: "warning",
//       })
//     }
//   }, [response.error])

//   // Functions
//   const onRefresh = () => {
//     setData(null)
//     setPage(0)
//   }

//   const onLoadMore = () => {
//     setPage(page + 1)
//   }

//   // Renderers
//   const renderItem = (item: any, index: number) => {
//     return (
//       <OnlineUserCard user={item} />
//     )
//   };
//   return (
//     <View style={{flex: 1}}>
//       <ActivityIndicator />
//       {data != null && 
//           <FlatList
//             data={data}
//             key={props.listKey}
//             overScrollMode={"never"}
//             showsVerticalScrollIndicator={false}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item, index }) => renderItem(item, index)}
//             onEndReached={onLoadMore}
//             onEndReachedThreshold={0.8}
//             onRefresh={onRefresh}
//             refreshing={response.loading}
//           />}
//     </View>
//   );
// };

// export default OnlineUserList;
