import Dimensions from 'Dimensions';
import { StyleSheet } from 'react-native';

var { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  clock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triggerWarning: {
    position: 'absolute',
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  triggerText: {
    color: 'white',
    position: 'relative',
    textAlign: 'center',
  }
});