import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Modal} from 'react-native';

// Themes
import {Colors} from '@/Theme';

interface Props {
  isVisible: boolean,
}

export default function LoadingModal(props: Props) {
  const {isVisible} = props
  return <Modal visible={isVisible} transparent>
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent:'center', alignItems: 'center'}}>
      <ActivityIndicator color={Colors.white} size={60} />
    </View>
  </Modal>
}
