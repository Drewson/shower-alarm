import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from './styles'

const TimeEdit = (props) => {
  return (
    <View style={styles.time} >
      <TouchableOpacity style={styles.increment} onPress={() => props.increase(props.name)} >
        <Icon name="angle-up" size={30} color="white" />
      </TouchableOpacity>
        {
          (props.name === 'minute' && props.time < 10)
          ?
          <Text style={styles.timeNumber} >0{props.time}</Text>
          :
          <Text style={styles.timeNumber} >{props.time}</Text>
        }
      <TouchableOpacity style={styles.decrement} onPress={() => props.decrease(props.name)} >
        <Icon name="angle-down" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default TimeEdit;