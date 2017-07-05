import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation
} from 'react-native';
import Exponent, {
  Constants,
  ImagePicker,
  registerRootComponent,
} from 'expo';

import { styles } from './styles';

export default class Camera extends Component {

  constructor(){
    super()
    this.state = {
      image: null,
      uploading: false,
      labels: [],
      picText: 'Take a shower pic!'
    }
  }

  static navigationOptions = {
    title: 'Camera',
    header: null
  }

  componentDidMount(){
    playAlarm(true);
  }

  componentWillUnmount(){
    playAlarm(false);
  }

  takePhoto = async () => {

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,3],
      base64: true
    });

    let uploadResponse, uploadResult;

    try {
      this.setState({uploading: true});

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.base64);
        uploadResult = await uploadResponse.json();
        console.log(uploadResult)
        let labels = uploadResult
          .responses[0]
          .labelAnnotations
          .map( l => l.description)
        this.setState({image: uploadResult.location, labels: labels });
        if(labels.includes('shower')){
          const { navigate } = this.props.navigation;
          navigate('Alarm');
        }
      }

    } catch(e) {
      console.log({uploadResponse});
      console.log({uploadResult});
      console.log({e});
      alert('Upload failed');
    } finally {
      this.setState({uploading: false});
      this.setState({ picText: "That's no shower!" })
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        this.setState({ picText: "This is what I saw: " + this.state.labels.join(', ') })
        setTimeout(() => {
          LayoutAnimation.easeInEaseOut();
          this.setState({ picText: "Take a shower pic!" })
        }, 5000)
      }, 2000)
    }
  }

  render() {
    return (
      <View style={styles.labels}>

        <TouchableOpacity
          onPress={this.takePhoto}
          style={styles.takePic}
        >
          <Text style={styles.takeText}>{this.state.picText}</Text>
        </TouchableOpacity>
        {
          this.state.uploading === true &&
            <View style={[StyleSheet.absoluteFill, {backgroundColor: 'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center'}]}>
            <ActivityIndicator
              color="#fff"
              animating
              size="large"
            />
          </View>
        }
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

async function playAlarm(bool){
  const soundObject = new Expo.Audio.Sound();
  if(bool){
    try {
    await soundObject.loadAsync(require('../../alarm.mp3'));
    await soundObject.playAsync();
    } catch (error) {
      console.lg('audio broken')
    }
  } else {
    soundObject.stopAsync()
  }
}

async function uploadImageAsync(img) {
  if (Constants.isDevice) {
    apiUrl = `http://647b2988.ngrok.io`;
  } else {
    apiUrl = `http://localhost:3000/`
  }

  let options = {
    method: 'POST',
    body: img,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'text/html',
    },
  };

  return fetch(apiUrl, options);
}