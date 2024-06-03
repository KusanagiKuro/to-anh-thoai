import {useEffect, useRef} from 'react';
import { showMessage } from "react-native-flash-message";
import moment from 'moment';
import { Platform, StatusBar } from "react-native";

export const showCustomMessage = ({message, type}: any) => {
  showMessage({
    message,
    type,
    icon: 'auto',
  })
}

export const logShort = (message: string) => {
  message = message.padStart(24 + Math.floor(message.length / 2), "=")
  message = message.padEnd(48, "=")
  console.log(message)
}

export const logWithTime = (...args: any) => {
  console.log(moment().toISOString(), ...args)
}

export const useDidMountEffect = (fn: () => any, inputs: Array<any>) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      fn();
    } else {
      didMountRef.current = true;
    }
  }, inputs);
};

/** Show network loading indicator on status bar ios. */
export const useNetworkActivityStatusBar = (isVisible = false) => {
  if (Platform.OS === "ios") {
    return StatusBar.setNetworkActivityIndicatorVisible(isVisible);
  }
};