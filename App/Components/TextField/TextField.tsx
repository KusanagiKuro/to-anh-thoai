/****
 *
 *
 *
 *
 * FEATURE AND USED:
 *
 * This text field have been add hide show password feature with is password attribute
 * we also style more for this text field (border outside, title above, etc ...)
 *
 */
import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles';

// Components
import {CText} from '../Text';

// Themes
import {Colors} from '@/Theme';

// Models
import {CTextFieldType} from '@/Models';
import { MaterialIcon } from '@/Theme/Icons';

const CTextField: React.FC<CTextFieldType> = props => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(
    props.isPassword ?? false,
  );

  const changeShowPasswordState = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onChangeTextInput = (text: string | number) => {
    props.onChangeText(text);
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.title && <CText text={props.title} style={props.titleStyle} />}
      <View style={[styles.textInputContainer, props.textInputContainerStyle]}>
        <TextInput
          onFocus={props.onFocus}
          editable={props.editable}
          multiline={props.isMultiline ? props.isMultiline : false}
          keyboardType={props.keyboardType}
          placeholderTextColor={'grey'}
          style={[styles.textInput, props.textInputStyle]}
          placeholder={props.placeHolder}
          secureTextEntry={passwordVisibility}
          maxLength={props.maxLength}
          onChangeText={(text: string) => {
            onChangeTextInput(text);
          }}
          value={props.value}
          returnKeyLabel={props.returnKeyLabel}
          returnKeyType={props.returnKeyType}
          ref={props.customRef}
          autoFocus={props.autoFocus}
          onSubmitEditing={() =>
            props.onSubmitEditingText ? props.onSubmitEditingText() : {}
          }
          blurOnSubmit={props.blurOnSubmit}
        />
        {props.isPassword && (
          <TouchableOpacity
            style={styles.iconPress}
            onPress={changeShowPasswordState}>
            <MaterialIcon name={passwordVisibility ? 'visibility' : 'visibility-off'} size={20} color={Colors.primary}/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CTextField;
