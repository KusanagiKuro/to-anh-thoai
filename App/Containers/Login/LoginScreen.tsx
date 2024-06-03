import { CButton, CTextField } from '@/Components'
import { ScreenNames } from '@/Navigation/AppNavigator'
import {  replace } from '@/Navigation/NavigationActions'
// import { AppActions } from '@/Redux/AppRedux'
import { AuthActions } from '@/Redux/AuthRedux'
import { Images } from '@/Theme'
import { showCustomMessage, useDidMountEffect } from '@/Utils'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Styles/style'

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch()
  const login = (params: any) => dispatch(AuthActions.loginRequest(params))
  // const showLoadingPopup = () => dispatch(AppActions.showLoadingPopup())
  // const hideLoadingPopup = () => dispatch(AppActions.hideLoadingPopup())
  const loginResponseData = useSelector((state: any) => state.auth.loginResponse.data)
  const loginResponseError = useSelector((state: any) => state.auth.loginResponse.error)
  const loginResponseLoading = useSelector((state: any) => state.auth.loginResponse.loading)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onChangeLoginResponseLoading = useDidMountEffect(() => {
    // if (loginResponseLoading) {
    //   showLoadingPopup()
    // } else {
    //   hideLoadingPopup()
    // }
  }, [loginResponseLoading])

  const onChangeLoginResponseData = useDidMountEffect(() => {
    if (loginResponseData != null) {
      replace(ScreenNames.Home)
    }
  }, [loginResponseData])

  const onChangeLoginResponseError = useDidMountEffect(() => {
    if (loginResponseError != null) {
      showCustomMessage({
        message: loginResponseError,
        type: 'danger'
      })
    }
  }, [loginResponseError])

  const onLoginPress = () => {
    var isValid = email.trim().length >0 && password.trim().length > 0
    if (isValid) {
      login({
        email,
        password,
      })
    }
  }

  return <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image source={Images.logo} style={styles.image}/>
      <CTextField
        onChangeText={setEmail}
        textInputContainerStyle={styles.textField}
        titleStyle={styles.textFieldTitle}
        title="Email"
        textInputStyle={styles.textFieldInput}
        keyboardType='email-address'
      />
      <CTextField
        isPassword
        onChangeText={setPassword}
        textInputContainerStyle={styles.textField}
        titleStyle={styles.textFieldTitle}
        title="Password"
        textInputStyle={styles.textFieldInput}
      />
      <CButton
        onPress={onLoginPress}
        btnTitle={"Login"}
        titleStyle={styles.buttonText}
        containerStyle={styles.button}
      />
    </ScrollView>
    <Text style={styles.versionText}>1.0.0</Text>
  </View>
}

export default LoginScreen;