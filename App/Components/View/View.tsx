/**
 *
 *
 *
 *
 * FEATURE AND USED:
 *
 * Using replace for View component
 * No needed re-style basic properties like row, column, flex, etc...
 *
 */
import React, {useMemo} from 'react';
import {View} from 'react-native';

// Models
import {CViewType} from '@/Models';

// Styles
import styles from './Styles';

const CView: React.FC<CViewType> & React.FC<any> = props => {
  const {
    row = false,
    col = false,
    center = false,
    fillWidth = false,
    fillHeight = false,
    wrap = false,
    leftContent = false,
    bottomContent = false,
    rightContent = false,
    centerHorizontal = false,
    centerVertical = false,
    fillParent = false,
    shrink = false,
  } = props;

  var viewStyle: any = [
    // make row or col
    row ? {flexDirection: 'row'} : {},
    col ? {flexDirection: 'column'} : {},

    // fast styles
    center ? styles.center : null,
    wrap ? styles.wrap : null,
    leftContent ? styles.leftContent : null,
    bottomContent ? styles.bottomContent : null,
    rightContent ? styles.rightContent : null,
    centerHorizontal ? styles.centerHorizontal : null,
    centerVertical ? styles.centerVertical : null,
    fillParent ? styles.fillParent : null,
    fillWidth ? styles.fillWidth : null,
    fillHeight ? styles.fillHeight : null,
    shrink ? styles.shrink : null,
  ];

  return <View style={[viewStyle, props.style]}>{props.children}</View>;
};

export default CView;
