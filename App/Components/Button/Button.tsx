/**
 *
 *
 * BUTTON COMPONENT
 *
 * **** FEATURE AND USED:
 *
 * Button with every style:
 * - left icon
 * - right icon
 * - bottom icon
 * - above icon
 *
 * We can also add more style for each element in this component
 * like icon, text, container button, ect...
 *
 * *** LOGIC NOTICED:
 *
 */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';

// Styles
import styles from './styles';

// Components
import {CText} from '../Text';

// Models
import {CButtonType} from '@/Models';

const KButton: React.FC<CButtonType> = props => {
  const {isLinkBtn = false, titleBlack = false, titleWhite = false} = props;

  const btnStyle = [isLinkBtn ? styles.btnLink : null];

  const btnTitleStyle = [
    titleBlack ? styles.blackTitle : {},
    titleWhite ? styles.whiteTitle : {},
  ];

  return (
    <TouchableOpacity
      onPress={() => (props.onPress ? props.onPress() : {})}
      style={[styles.container, btnStyle, props.containerStyle]}>
      <View style={styles.titleContainer}>
        {props.btnTitle && (
          <CText
            text={props.btnTitle}
            style={[styles.btnTitle, btnStyle, btnTitleStyle, props.titleStyle]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default KButton;
