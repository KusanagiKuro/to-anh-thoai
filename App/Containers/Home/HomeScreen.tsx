import React, {useEffect, useState} from 'react';
import {CBaseView} from '@/Components';
import {
  showCustomMessage,
  useDidMountEffect,
} from '@/Utils';
import {useDispatch, useSelector} from 'react-redux';
import {
  Pressable,
  Text,
  View,
} from 'react-native';
import {
  DefaultFilterData,
  TabOptions,
} from '@/Utils/DataUtils';
import styles from './styles/style';
import {Colors, Metrics} from '@/Theme';
import {FilterData, IResponse, OnlineUser, PaginationData} from '@/Models';
// import { OnlineUserActions } from '@/Redux/OnlineUserRedux';
import { FlatList } from 'react-native-gesture-handler';
// import OnlineUserList from './Components/OnlineUserList';

const Tabs = [TabOptions.UserList, TabOptions.Favorite];

const defaultQuery = {
  inc: "gender,name,email,dob,phone,cell,id,picture",
}

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedTab, selectTab] = useState<string>(TabOptions.UserList);
  // const getOnlineUser= (params: any) => dispatch(OnlineUserActions.getOnlineUserRequest(params));

  useDidMountEffect(() => {
    switch (selectedTab) {
      case TabOptions.UserList:
        break;
      case TabOptions.Favorite:
        break;
    }
  }, [selectedTab]);

  // useEffect(() => {
  //   getOnlineUser({
  //     ...defaultQuery,
  //     page: 0,
  //     pageSize: 10,
  //   })
  // }, [])

  const renderTab = (title: string, index: number) => {
    var backgroundColor, textColor, marginLeft;
    if (title != selectedTab) {
      backgroundColor = Colors.white;
      textColor = Colors.primary;
    } else {
      textColor = Colors.white;
      backgroundColor = Colors.primary;
    }
    if (index) {
      marginLeft = Metrics.baseMargin;
    }
    return (
      <Pressable
        key={title}
        onPress={() => selectTab(title)}
        style={[
          styles.tabButton,
          {
            backgroundColor,
            marginLeft: marginLeft ?? 0,
          },
        ]}>
        <Text style={[styles.tabText, {color: textColor}]}>{title}</Text>
      </Pressable>
    );
  };

  const renderTopSection = () => {
    return (
      <View style={styles.tabContainer}>
        {Tabs.map(renderTab)}
      </View>
    );
  };

  // const renderUserList = () => {
  //   return (
  //     <OnlineUserList isFavorite={selectedTab == TabOptions.Favorite} listKey={selectedTab}/>
  //   )
  // }

  return ( 
    <CBaseView>
      {renderTopSection()}
      {/* {renderUserList()} */}
    </CBaseView>
  );
}

export default HomeScreen;
