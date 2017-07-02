import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import moment from "moment";

import CameraRoute from './camera'
import { styles } from './styles';

class Clock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      time: moment().format("LTS"),
      date: moment().format("LL"),
      alarmTime: {},
      triggered: false
    };
    this.alarmCheck = this.alarmCheck.bind(this)
  }

  componentDidMount() {
    this.setState({ alarmTime: this.props.navigation.state.params.alarmTime })
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick(){
    this.alarmCheck()
    this.setState({
      time: moment().format("LTS"),
      date: moment().format("LL"),
      hour: moment().format("h"),
      minute: moment().format("m"),
      second: moment().format("s"),
      meridiem: moment().format('a'),
    })
  }

  alarmCheck(){
    if(this.state.alarmTime.hour == this.state.hour){
      if(this.state.alarmTime.minute == this.state.minute){
        if(this.state.second == this.state.alarmTime.second){
          if(this.state.meridiem == this.state.alarmTime.meridiem){
            this.setState({ triggered: true })
            const { navigate } = this.props.navigation;
            navigate('Camera', { navigation: this.props.navigation})
          }
        }
      }
    }
  }

  render(){
    return (
      <View style={styles.clockContainer} >
        <Text style={styles.time} >{this.state.time}</Text>
      </View>
    )
  }
}

export default Clock;