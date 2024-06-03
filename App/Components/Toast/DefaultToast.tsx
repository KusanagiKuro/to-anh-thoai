/***
 *
 *
 * FEATURE AND USED:
 *
 * Show default toast
 * read more and get example at: https://github.com/crazycodeboy/react-native-easy-toast
 *
 */
import React from 'react';
import {View} from 'react-native';
import Toast, { ToastComponentProps } from 'react-native-easy-toast';

// Styles
import styles from './styles';

// Models
import {CDefaultToastType} from '@/Models';

// Fix for no style in react-native-easy-toast
interface Props extends ToastComponentProps {
  style: any;
}

const TSToast = React.forwardRef(
  (props: Props, ref: React.LegacyRef<Toast>) => <Toast ref={ref} {...props} />,
);

const CDefaultToast: React.FC<CDefaultToastType> = props => {
  return (
    <View style={styles.rootContainer}>
      <TSToast
        ref={props.customRef}
        position="center"
        positionValue={props.position ? props.position : 130}
        fadeInDuration={700}
        fadeOutDuration={1000}
        opacity={1}
        style={styles.container}
        textStyle={styles.text}
      />
    </View>
  );
};

export default CDefaultToast;
