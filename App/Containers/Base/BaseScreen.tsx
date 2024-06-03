import { ScreenNames } from "@/Navigation/AppNavigator";
import { navigate, replace } from "@/Navigation/NavigationActions";
import { AppActions } from "@/Redux/AppRedux";
import { AuthActions } from "@/Redux/AuthRedux";
import { showCustomMessage, StorageKeys } from "@/Utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { FileLogger, LogLevel } from "react-native-file-logger";
import { useDispatch } from "react-redux";
import AsyncStorage from "rn-secure-storage";

const BaseScreen: React.FC = () => {
  const dispatch = useDispatch()
  // Force login on user that is stored in the local storage
  const forceLogin = (params: any) => dispatch(AuthActions.forceLogin(params))
  const processSeed = (seed: any) => {
    // If there's already a token, force login
    if (seed != null) {
      forceLogin(seed)
      replace(ScreenNames.Home)
      return
    }
    replace(ScreenNames.Login)
  }

  const processUser = () => {
    AsyncStorage.getItem(StorageKeys.seed).then(
      (seed: any) => processSeed(seed)
    )
  }

  useEffect(() => {
    FileLogger.configure({
      logLevel: LogLevel.Debug,
    })
    processUser()
  }, [])
  return <></>
}

export default BaseScreen;