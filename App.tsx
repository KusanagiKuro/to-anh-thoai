import React, { useEffect } from 'react';
import {View, StyleSheet, StatusBar } from 'react-native';

// Redux
import {Provider} from 'react-redux';
// import store from '@/Redux/CreateStore';

// Navigation
import {AppNavigation} from '@/Navigation/AppNavigation';

// Components
import { showCustomMessage } from '@/Utils';
import FlashMessage from 'react-native-flash-message';
import store from '@/Redux/CreateStore';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const CustomStatusBar = ({backgroundColor, ...props}: any) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default function App() {
  return (
    <Provider store={store}>
      <CustomStatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={styles.container}>
        <AppNavigation />
        {/* <FlashMessage position="top" /> */}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  stagingText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    color: 'red',
  },
});