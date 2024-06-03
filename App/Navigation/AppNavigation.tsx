import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {screenTracking} from './NavigationActions';

// ref
import {navigationRef, ScreenNames} from './AppNavigator';

// Screens
import {LoginScreen, HomeScreen} from '../Containers';

// Components
// import {AppActions, AppStateTypes} from '@/Redux/AppRedux';
import {useDispatch, useSelector} from 'react-redux';
import { LoadingModal } from '@/Components';
import BaseScreen from '@/Containers/Base/BaseScreen';

// Screen options
const SCREEN_OPTIONS = {
  headerShown: false,
};

// App Stack
const AppStack = createStackNavigator();
function AppNavigation() {
  // const appState: AppStateTypes = useSelector((state: any) => state.app);

  React.useEffect(() => {
  }, [])

  return (
    <NavigationContainer ref={navigationRef} onStateChange={screenTracking}>
      <AppStack.Navigator
        screenOptions={SCREEN_OPTIONS}
        initialRouteName={ScreenNames.Login}>
        {/* <AppStack.Screen name={ScreenNames.Base} component={BaseScreen} /> */}
        <AppStack.Screen name={ScreenNames.Login} component={LoginScreen} />
        {/* <AppStack.Screen name={ScreenNames.Home} component={HomeScreen} /> */}
      </AppStack.Navigator>
      {/* <LoadingModal isVisible={appState.isLoadingPopupVisible} /> */}
    </NavigationContainer>
  );
}

export {AppNavigation};
