import {StyleSheet} from 'react-native';

// themes
import {Metrics, Colors} from '@/Theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.transparent,
  },
  textInputContainer: {
    flexDirection: 'row',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Metrics.halfTripleBaseMargin - 4,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  textInput: {
    flex: 1,
    height: 48,
    color: Colors.black,
  },
  iconPress: {
    justifyContent: 'center',
  },
  icon: {
    height: 40,
    width: 40,
  },
});
