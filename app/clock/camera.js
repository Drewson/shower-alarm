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
    }
  }

  static navigationOptions = {
    title: 'Camera',
    header: null
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
    }
  }

  render() {
    return (
      <View style={styles.labels}>

        <Text style={styles.labelsText}>
          {this.state.labels.join(", ")}
        </Text>

        <TouchableOpacity
          onPress={this.takePhoto}
          style={styles.takePic}
        >
          <Text style={styles.takeText}>Take a shower pic</Text>
        </TouchableOpacity>
        {
          this.state.image != null &&
          <View style={styles.noShower}>
            <View style={{borderTopRightRadius: 3, borderTopLeftRadius: 3, overflow: 'hidden'}}>
              <Image
                source={{uri: image}}
                style={{width: 250, height: 250}}
              />
            </View>
            <Text>{this.state.labels}</Text>
          </View>
        }
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

async function uploadImageAsync(img) {
  if (Constants.isDevice) {
    apiUrl = `http://9f123ab5.ngrok.io`;
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