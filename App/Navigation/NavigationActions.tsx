import { StackActions } from '@react-navigation/native';
import {navigationRef} from './AppNavigator';

// Get active route name
export function getActiveRouteName(state: any): any {
  if (state) {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  }
}

// Tracking screen name
export const screenTracking = (state: any): void => {
  const currentRouteName = getActiveRouteName(state);
  console.log(`====== NAVIGATING to > ${currentRouteName}`);
};

/** Navigate method */
export function navigate(name: any, params?: any) {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.navigate(name as never, params as never);
  }
}

export function push(name: any, params?: any) {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.push(name as never, params as never);
  }
}

export function goBack() {
  if (
    navigationRef?.current?.isReady() &&
    navigationRef?.current?.canGoBack()
  ) {
    navigationRef?.current?.goBack();
  }
}

export function resetRoot(params: any) {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.resetRoot(params);
  }
}

export function replace(name: any, params?: any) {
  if (navigationRef?.current?.isReady()) {
    navigationRef?.current?.dispatch(
      StackActions.replace(name, params)
    );
  }
}