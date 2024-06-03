/**
 *
 *
 *
 * Data type constraints for components
 */

import React from 'react';
import {
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from 'react-native';

/** ****BASE VIEW */
export interface CBaseViewType {
  containerStyle?: StyleProp<ViewStyle>;
  onLayout?: any;
  
}

/** ****VIEW */
export interface CViewType {
  children?:
    | JSX.Element
    | JSX.Element[]
    | React.ReactNode
    | React.ReactNodeArray;

  flex?: number;
  row?: boolean;
  col?: boolean;
  center?: boolean;
  fillWidth?: boolean;
  fillHeight?: boolean;
  wrap?: boolean;
  leftContent?: boolean;
  bottomContent?: boolean;
  rightContent?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
  fillParent?: boolean;
  shrink?: boolean;

  style?: StyleProp<ViewStyle>;
}

/** ****TEXT */
export interface CTextType {
  text: String | undefined | null;

  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  color?: any;
  size?: any;
  align?: any;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;

  bold?: boolean;
}

/** ****BUTTON */
export interface CButtonType {
  btnTitle?: String | undefined | null;
  aboveIcon?: any;
  leftIcon?: any;
  rightIcon?: any;
  belowIcon?: any;

  aboveIconStyle?: StyleProp<ImageStyle>;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  belowIconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: any;

  titleBlack?: boolean;
  titleWhite?: boolean;

  isLinkBtn?: boolean;
  onPress?: () => void | undefined | null | any;
}

/** ****VIEW IMAGE */
export interface CViewImageType {
  imageList: Array<any>;

  visible: boolean;
  selectedIndex?: number | any;
  onPressCloseImage: () => void;

  containerStyle?: any;
}

/** ****DEFAULT TOAST */
export interface CDefaultToastType {
  customRef: any;
  position?: number;
  style?: StyleProp<ViewStyle>;
}

/** ****DEFAULT LOADING */
export interface CDefaultLoadingType {
  containerStyle?: StyleProp<ViewStyle>;

  isFullScreen?: boolean;
  isCoverScreen?: boolean;
}

/** ****MEDIA SLIDER */
export interface CMediaSliderType {
  data: any;

  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  pagingDotContainer?: StyleProp<ViewStyle>;

  isShowPagingDot?: boolean;
  isSquareImage?: boolean;
  resizeMode?: string;
  onPressViewImage?: any;
}

/** ****TEXT FIELD */
export interface CTextFieldType {
  customRef?: any;

  title?: string;
  placeHolder?: string;
  value?: string | number | any | undefined;

  isPassword?: boolean;
  maxLength?: number;
  editable?: boolean;
  blurOnSubmit?: boolean;
  autoFocus?: boolean;
  isMultiline?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  textInputContainerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;

  keyboardType?: KeyboardTypeOptions;
  returnKeyLabel?: string | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined;

  onChangeText: (text: string | any | number) => void;
  onSubmitEditingText?: () => void;
  onFocus?: () => void | undefined;
}
