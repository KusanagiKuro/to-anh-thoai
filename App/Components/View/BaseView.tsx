/**
 *
 *
 *
 * FEATURE AND USED:
 * Base view using at the outermost of screen.
 *
 * when we using this view at the outermost we can press out side
 * to hide soft keyboard.
 *
 * or add style for SafeAreaView to change color of status bar.
 *
 *
 */
import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, Platform} from 'react-native';
import styles from './Styles';

// Models
import {CBaseViewType} from '@/Models';

export function CBaseView(props: React.PropsWithChildren<CBaseViewType>) {
  return (
    <KeyboardAvoidingView
      style={styles.containerRoot}
      behavior="padding"
      enabled
      keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
      <SafeAreaView
        onLayout={props.onLayout}
        style={[styles.containerRoot, props.containerStyle]}>
        {props.children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CBaseView;
